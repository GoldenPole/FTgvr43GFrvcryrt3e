const CACHE_NAME = 'lideri-v9';
const IMAGE_CACHE = 'lideri-images-v1';
const IMAGE_MAX  = 80; // максимальна кількість фото в кеші

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/gallery.html',
  '/product.html',
  '/products.js',
  '/haivka.html',
  '/haivka-work.html',
  '/haivka-works.js',
  '/assets/liderilogo3444.svg',
  '/assets/sub1.webp',
  '/assets/sub2.webp',
  '/assets/sub3.webp',
  '/fonts/Inter-VariableFont.woff2',
  '/fonts/Inter-Italic-VariableFont.woff2',
  '/fonts/CormorantGaramond-VariableFont.woff2',
  '/fonts/CormorantGaramond-Italic-VariableFont.woff2',
];

// Встановлення: кешуємо всі статичні файли
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Активація: видаляємо старі кеші (крім image cache)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== IMAGE_CACHE)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Фото з Supabase: cache-first з обмеженням розміру
async function cacheFirstImage(request) {
  const cache  = await caches.open(IMAGE_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
    // Видаляємо найстаріший запис якщо перевищено ліміт
    const keys = await cache.keys();
    if (keys.length > IMAGE_MAX) {
      await cache.delete(keys[0]);
    }
  }
  return response;
}

// Fetch: різні стратегії для різних типів ресурсів
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ігноруємо не-GET запити та chrome-extension
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  // Фото з Supabase: cache-first (окремий кеш з лімітом)
  if (url.hostname.includes('supabase.co')) {
    event.respondWith(cacheFirstImage(request));
    return;
  }

  // HTML-сторінки: network-first (завжди свіжі), fallback на кеш
  if (url.origin === self.location.origin && url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            caches.open(CACHE_NAME).then(c => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Решта статичних файлів (JS, шрифти, svg): cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
    return;
  }
});
