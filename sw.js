const CACHE_NAME = 'lideri-v2';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/gallery.html',
  '/product.html',
  '/products.js',
  '/liderilogo3444.svg',
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

// Активація: видаляємо старі кеші
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: різні стратегії для різних типів ресурсів
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ігноруємо не-GET запити та chrome-extension
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  // Фото з Supabase: Cache-first (фото не змінюються)
  if (url.hostname.includes('supabase.co')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response.ok) cache.put(request, response.clone());
        return response;
      })
    );
    return;
  }

  // Статичні файли: Cache-first, fallback на мережу
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then(cached => cached || fetch(request))
    );
    return;
  }
});
