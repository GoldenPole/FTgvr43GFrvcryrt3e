const products = [
  {
    id: 1,
    name: "Кеди шкіра+замша коричневі",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korch_ked01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korch_ked02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korch_ked03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korch_ked04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korch_ked05.webp",

    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    desc: "Комбінація гладкої шкіри та м'якої замші в коричневих тонах — взуття, яке читається як дорого, навіть у casual-образі. Підходить до денімових та земляних відтінків."
  },
  {
    id: 2,
    name: "Лофери замшеві вино",
    category: "lofer",
    categoryLabel: "Лофери",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/b503b4ad-ae9b-432e-bcc0-d3378aa986bd.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/f6e41dc0-f45e-4178-87ea-ff8c941b44b6.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/69a3d2c8-4c9e-4409-8a1d-745292c0d933.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/485debe2-7c43-49e3-a36f-5d1cdd425277.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/b9114230-5117-4c2c-ae8b-94537d9ed75b.jpg",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    desc: "Глибокий винний відтінок замші та масивна підошва — пара, яка перетворює будь-який лук на виважений. Від офісу до вечірнього виходу без переодягання."
  },
  {
    id: 3,
    name: "Замшеві черевики з драпіруванням",
    category: "cherevyky",
    categoryLabel: "Черевики",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/drap_cher01.webp",


      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/drap_cher04.webp",
        "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/drap_cher05.webp",
        "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/drap_cher06.webp",

    ],
    price: 3200,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Драпірування на халяві робить цю модель по-справжньому помітною. Натуральна замша, що сідає по нозі, та широкий підбор — комфорт без компромісів."
  },
  {
    id: 4,
    name: "Лофери чорні замшеві з китицями",
    category: "lofer",
    categoryLabel: "Лофери",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/4bae0645-c103-45d7-b6ce-36213b1475ba.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/5296759171187414337.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/5296759171187414338.jpg",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/6ef51762-439b-4339-b8b1-62bf1cca88c8.jpg",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    desc: "Чорна замша та класичні китиці — деталь, яка видає смак. Легка підошва знімає втому навіть після довгого дня."
  },
  {
    id: 5,
    name: "Черевик лаковий бордо",
    category: "cherevyky",
    categoryLabel: "Черевики",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/tp01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/tp02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/tp03.webp",


        "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/tp06.webp",
        "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/tp07.webp",
    ],
    price: 3000,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Лак кольору бордо, загострений мис, шнурівка + блискавка. Модель для тих, хто не боїться бути поміченим."
  },
  {
    id: 6,
    name: "Кросівки шкіра+замша коричневі",
    category: "krosivky",
    categoryLabel: "Кросівки",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bordok01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bordok03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bordok04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bordok05.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bordok02.webp",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41],
    desc: "Масивна двоколірна підошва та комбі шкіра+замша — кросівки, які тримають форму і після сотні виходів. Сезон навпіл."
  },
  {
    id: 7,
    name: "Туфлі молочні з ремінцем",
    category: "tufli",
    categoryLabel: "Туфлі",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bil1.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/mol_tuf02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/mol_tuf03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/mol_tuf04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/mol_tuf05.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/mol_tuf06.webp",
    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Молочна гладка шкіра та тонкий ремінець на щиколотці — мінімалізм, який виглядає дорого. Від ділової зустрічі до вечірки."
  },
  {
    id: 8,
    name: "Кросівки чорна шкіра+замша",
    category: "krosivky",
    categoryLabel: "Кросівки",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bla1.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bla2.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bla3.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bla4.webp",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41],
    desc: "Чорний — найлегший вибір. Глибокий протектор, анатомічна підкладка та надійна шнурівка для тих, хто в русі весь день."
  },
  {
    id: 9,
    name: "Мері Джейн чорна замша",
    category: "meri-dzhein",
    categoryLabel: "Мері Джейн",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri05.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri06.webp",
    ],
    price: 2600,
    badge: null,
    sizes: [36, 37, 38, 39, 40],
    desc: "Культовий силует у м'якій чорній замші. Регульований ремінець, низький підбор — класика, яка не стомлює."
  },
  {
    id: 10,
    name: "Черевики чорні замшеві",
    category: "cherevyky",
    categoryLabel: "Черевики",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/chor_cher01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/chor_cher03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/chor_cher04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/chor_cher05.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/chor_cher02.webp",

    ],
    price: 3000,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Чорна замша, блоковий каблук, блискавка збоку. Базова модель, яка закриває будь-який осінньо-зимовий образ."
  },
  {
    id: 11,
    name: "Туфлі замшеві сірі",
    category: "tufli",
    categoryLabel: "Туфлі",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir_tuf01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir_tuf02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir_tuf03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir_tuf04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir_tuf05.webp",

    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Відкрита конструкція, квадратний носок та масивний обтягнутий підбор. Нейтральний сірий, що поєднується з усім."
  },
  {
    id: 12,
    name: "кеди сірі замша+шкіра",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir001.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir005.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sir06.webp",

    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Сіра гама, масивна біла підошва та комбі фактур. Нейтральний варіант для тих, хто цінує деталі, але не кричить про це."
  },
  {
    id: 13,
    name: "Мері Джейн чорні замшеві",
    category: "meri-dzhein",
    categoryLabel: "Мері Джейн",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri_tuf01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri_tuf02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri_tuf03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri_tuf04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/meri_tuf05.webp",

    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Один ремінець, масивний каблук, округлий носок — Мері Джейн у сучасному прочитанні. Замша м'яко тримає форму."
  },
  {
    id: 14,
    name: "Слінгбеки замшеві чорні",
    category: "slinhbeky",
    categoryLabel: "Слінгбеки",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/cho1.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/cho2.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sling03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sling04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sling05.webp",


    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Відкрита п’ята, квадратний підбор і пряжка з металу. Стримана сексуальність без зайвого."
  },
  {
    id: 15,
    name: "Кеди замшеві фуксія",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/fuks01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/fuks02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/fuks03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/fuks04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/fuks05.webp",

    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Фуксія — єдина деталь, яка потрібна образу. Біла підошва та контрастні смуги підкреслюють силует. Для тих, хто знає ціну яскравому акценту."
  },
  {
    id: 16,
    name: "Кросівки масивні бежеві",
    category: "krosivky",
    categoryLabel: "Кросівки",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/kros_roz01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/kros_roz02.webp",


      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/kros_roz04.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/kros_roz05.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/kros_roz06.webp",
       "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/kros_roz07.webp",


    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Бежева монохромна платформа з рельєфною підошвою. Пісочні тони, що грають з тілесними та молочними відтінками в образі."
  },
  {
    id: 17,
    name: "Лофери блакитні під рептилію",
    category: "lofer",
    categoryLabel: "Лофери",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sin_lofer001.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sin_lofer02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sin_lofer03.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/sin_lofer04.webp",


    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Тиснення під рептилію та перламутровий відлив блакитної шкіри — лофери для тих, хто шукає щось поза трендом. Китиці завершують образ."
  },
  {
    id: 18,
    name: "Кеди замшеві коричневі ретро",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korich01.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korich02.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korich03.webp",
      
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korich05.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/korich06.webp",
    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Ретро-силует, медова підошва та коричнева замша з темними смугами. Кеди, які виглядають як вінтаж, але носяться як сучасне взуття."
  },
  {
    id: 19,
    name: "Туфлі лаковані темно-коричневі",
    category: "tufli",
    categoryLabel: "Туфлі",
    emoji: "",
    images: [
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bor1.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bor2.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bor3.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bor4.webp",
      "https://qtcvngzcbjpnosriaxga.supabase.co/storage/v1/object/public/photo/bor5.webp",
    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Лакована шкіра з глянцем, ремінець на щиколотці та високий квадратний каблук. Темно-коричневий — між чорним і коньяком, і це найцікавіше місце."
  }


];
