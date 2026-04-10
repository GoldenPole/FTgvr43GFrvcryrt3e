const products = [
  {
    id: 1,
    name: "Кеди шкіра+замша коричневі",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "/assets/korch_ked01.webp",
      "/assets/korch_ked02.webp",
      "/assets/korch_ked03.webp",
      "/assets/korch_ked04.webp",
      "/assets/korch_ked05.webp",

    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    desc: "Універсальні кеди для сучасного чоловіка. Модель виготовлена з високоякісної натуральної шкіри коричневого кольору, доповненої вставками з м'якої натуральної замші. Така комбінація фактур надає взуттю цікавого та дорогого вигляду. Класична шнурівка в тон дозволяє ідеально зафіксувати взуття на нозі. Плоска, зносостійка підошва забезпечує комфорт при ходьбі. Внутрішня підкладка з натуральної шкіри."
  },
  {
    id: 2,
    name: "Лофери замшеві вино",
    category: "lofer",
    categoryLabel: "Лофери",
    emoji: "",
    images: [
      "/assets/b503b4ad-ae9b-432e-bcc0-d3378aa986bd.jpg",
      "/assets/f6e41dc0-f45e-4178-87ea-ff8c941b44b6.jpg",
      "/assets/69a3d2c8-4c9e-4409-8a1d-745292c0d933.jpg",
      "/assets/485debe2-7c43-49e3-a36f-5d1cdd425277.jpg",
      "/assets/b9114230-5117-4c2c-ae8b-94537d9ed75b.jpg",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    desc: "Класичний силует лоферів у новому, сучасному виконанні. Ця модель поєднує в собі аристократичну стриманість та міський комфорт. Виготовлені з високоякісної натуральної замші глибокого винного відтінку, вони стануть ідеальним акцентом у вашому образі. Світла масивна підошва додає взуттю легкості та динаміки, а м'яка устілка забезпечує комфорт протягом усього дня."
  },
  {
    id: 3,
    name: "Замшеві черевики з драпіруванням",
    category: "cherevyky",
    categoryLabel: "Черевики",
    emoji: "",
    images: [
      "/assets/drap_cher01.webp",


      "/assets/drap_cher04.webp",
        "/assets/drap_cher05.webp",
        "/assets/drap_cher06.webp",

    ],
    price: 3200,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Шукаєте універсальне взуття? Ця модель - ідеальний вибір. Натуральна замша виглядає дорого та адаптується до форми ноги, а широкі підбори забезпечують комфорт протягом усього дня. Ефектне драпірування на халяві робить модель актуальною та стильною."
  },
  {
    id: 4,
    name: "Лофери чорні замшеві з китицями",
    category: "lofer",
    categoryLabel: "Лофери",
    emoji: "",
    images: [
      "/assets/4bae0645-c103-45d7-b6ce-36213b1475ba.jpg",
      "/assets/5296759171187414337.jpg",
      "/assets/5296759171187414338.jpg",
      "/assets/6ef51762-439b-4339-b8b1-62bf1cca88c8.jpg",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41, 42],
    desc: "Преміальна натуральна замша та легка амортизуюча підошва роблять ці чорні лофери незамінними для міського життя. Елегантні кутасики підкреслюють ваш бездоганний смак."
  },
  {
    id: 5,
    name: "Черевик лаковий бордо",
    category: "cherevyky",
    categoryLabel: "Черевики",
    emoji: "",
    images: [
      "/assets/tp01.webp",
      "/assets/tp02.webp",
      "/assets/tp03.webp",


        "/assets/tp06.webp",
        "/assets/tp07.webp",
    ],
    price: 3000,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Натуральна лакова шкіра кольору бордо. Стійкий блоковий каблук та загострений мис. Поєднання шнурівки та бічної блискавки забезпечує точну посадку та зручність експлуатації. Лаконічна модель для міських умов."
  },
  {
    id: 6,
    name: "Кросівки шкіра+замша коричневі",
    category: "krosivky",
    categoryLabel: "Кросівки",
    emoji: "",
    images: [
      "/assets/bordok01.webp",
      "/assets/bordok03.webp",
      "/assets/bordok04.webp",
      "/assets/bordok05.webp",
      "/assets/bordok02.webp",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41],
    desc: "Комбінація натуральної шкіри та замші коричневого кольору. Масивна двоколірна підошва з вираженим протектором для амортизації. Утилітарна модель для повсякденного використання."
  },
  {
    id: 7,
    name: "Туфлі молочні з ремінцем",
    category: "tufli",
    categoryLabel: "Туфлі",
    emoji: "",
    images: [
      "/assets/bil1.webp",
      "/assets/mol_tuf02.webp",
      "/assets/mol_tuf03.webp",
      "/assets/mol_tuf04.webp",
      "/assets/mol_tuf05.webp",
      "/assets/mol_tuf06.webp",
    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Натуральна гладка шкіра молочного кольору. Стійкий підбор середньої висоти та заокруглений мис. Тонкий ремінець на щиколотці з металевою фурнітурою для фіксації стопи. Класична модель для ділового та вечірнього гардероба."
  },
  {
    id: 8,
    name: "Кросівки чорна шкіра+замша",
    category: "krosivky",
    categoryLabel: "Кросівки",
    emoji: "",
    images: [
      "/assets/bla1.webp",
      "/assets/bla2.webp",
      "/assets/bla3.webp",
      "/assets/bla4.webp",
    ],
    price: 2400,
    badge: null,
    sizes: [36, 37, 38, 39, 40, 41],
    desc: "Натуральна чорна шкіра та замша. Двошарова підошва з глибоким протектором для оптимального зчеплення. Анатомічна шкіряна підкладка та функціональна шнурівка. Стійка модель для активної щоденної експлуатації."
  },
  {
    id: 9,
    name: "Мері Джейн чорна замша",
    category: "meri-dzhein",
    categoryLabel: "Мері Джейн",
    emoji: "",
    images: [
      "/assets/meri01.webp",
      "/assets/meri02.webp",
      "/assets/meri03.webp",
      "/assets/meri04.webp",
      "/assets/meri05.webp",
      "/assets/meri06.webp",
    ],
    price: 2600,
    badge: null,
    sizes: [36, 37, 38, 39, 40],
    desc: "Натуральна чорна замша. Стійка підошва з низьким підбором та заокругленим мисом. Регульований ремінець для надійної фіксації. Модель у стилі Мері Джейн для тривалого повсякденного носіння."
  },
  {
    id: 10,
    name: "Черевики чорні замшеві",
    category: "cherevyky",
    categoryLabel: "Черевики",
    emoji: "",
    images: [
      "/assets/chor_cher01.webp",
      "/assets/chor_cher03.webp",
      "/assets/chor_cher04.webp",
      "/assets/chor_cher05.webp",
      "/assets/chor_cher02.webp",

    ],
    price: 3000,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Натуральна чорна замша. Стійкий блоковий каблук середньої висоти та заокруглений мис. Бічна блискавка для швидкого взування. Лаконічний дизайн для базового демісезонного гардероба."
  },
  {
    id: 11,
    name: "Туфлі замшеві сірі",
    category: "tufli",
    categoryLabel: "Туфлі",
    emoji: "",
    images: [
      "/assets/sir_tuf01.webp",
      "/assets/sir_tuf02.webp",
      "/assets/sir_tuf03.webp",
      "/assets/sir_tuf04.webp",
      "/assets/sir_tuf05.webp",

    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Сірі замшеві туфлі з ремінцем на щиколотці. Конструкція з відкритими боковими частинами та квадратним носком. Підбор масивний, обтягнутий основним матеріалом. Колір монохромний."
  },
  {
    id: 12,
    name: "кеди сірі замша+шкіра",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "/assets/sir001.webp",
      "/assets/sir02.webp",
      "/assets/sir03.webp",
      "/assets/sir04.webp",
      "/assets/sir005.webp",
      "/assets/sir06.webp",

    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Сірі низькі кеди з комбінованим верхом із замші та гладкої шкіри. Модель оснащена масивною білою підошвою та білими шнурками. Колірна гама нейтральна."
  },
  {
    id: 13,
    name: "Мері Джейн чорні замшеві",
    category: "meri-dzhein",
    categoryLabel: "Мері Джейн",
    emoji: "",
    images: [
      "/assets/meri_tuf01.webp",
      "/assets/meri_tuf02.webp",
      "/assets/meri_tuf03.webp",
      "/assets/meri_tuf04.webp",
      "/assets/meri_tuf05.webp",

    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Чорні туфлі типу «Мері Джейн» із замшевим покриттям. Модель має один ремінець через підйом стопи та масивний стійкий каблук. Носок округлої форми. Внутрішня частина виконана у світлому кольорі."
  },
  {
    id: 14,
    name: "Слінгбеки замшеві чорні",
    category: "slinhbeky",
    categoryLabel: "Слінгбеки",
    emoji: "",
    images: [
      "/assets/cho1.webp",
      "/assets/cho2.webp",
      "/assets/sling03.webp",
      "/assets/sling04.webp",
      "/assets/sling05.webp",


    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Чорні замшеві туфлі з відкритою п’ятою (слінгбеки). Мають стійкий квадратний підбор середньої висоти та закритий носок. Фіксація забезпечується ремінцем із металевою пряжкою. Матеріал верху має матову текстуру."
  },
  {
    id: 15,
    name: "Кеди замшеві фуксія",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "/assets/fuks01.webp",
      "/assets/fuks02.webp",
      "/assets/fuks03.webp",
      "/assets/fuks04.webp",
      "/assets/fuks05.webp",

    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Замшеві кеди кольору фуксія з контрастними білими елементами. Мають білу підошву з дрібним рифленням та білі шнурки. Бічні сторони декоровані двома паралельними смугами. Силует низький, спортивний."
  },
  {
    id: 16,
    name: "Кросівки масивні бежеві",
    category: "krosivky",
    categoryLabel: "Кросівки",
    emoji: "",
    images: [
      "/assets/kros_roz01.webp",
      "/assets/kros_roz02.webp",


      "/assets/kros_roz04.webp",
      "/assets/kros_roz05.webp",
      "/assets/kros_roz06.webp",
       "/assets/kros_roz07.webp",


    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Бежеві масивні кросівки з комбінації шкіри та замші. Висока платформа має виражений рельєф для зчеплення. Монохромна конструкція в пісочних тонах."
  },
  {
    id: 17,
    name: "Лофери блакитні під рептилію",
    category: "lofer",
    categoryLabel: "Лофери",
    emoji: "",
    images: [
      "/assets/sin_lofer001.webp",
      "/assets/sin_lofer02.webp",
      "/assets/sin_lofer03.webp",
      "/assets/sin_lofer04.webp",


    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Блакитні лофери з фактурним тисненням під рептилію. Декоровані шкіряними китицями на підйомі стопи. Підошва біла, пласка, середньої товщини. Матеріал має легкий перламутровий відлив."
  },
  {
    id: 18,
    name: "Кеди замшеві коричневі ретро",
    category: "kedy",
    categoryLabel: "Кеди",
    emoji: "",
    images: [
      "/assets/korich01.webp",
      "/assets/korich02.webp",
      "/assets/korich03.webp",
      "/assets/korich04.webp",
      "/assets/korich05.webp",
      "/assets/korich06.webp",
    ],
    price: 2600,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Коричневі замшеві кеди в ретро-стилі з темними бічними смугами. Взуття має тонку гумову підошву медового кольору. Шнурівка класична, в тон основного матеріалу."
  },
  {
    id: 19,
    name: "Туфлі лаковані темно-коричневі",
    category: "tufli",
    categoryLabel: "Туфлі",
    emoji: "",
    images: [
      "/assets/bor1.webp",
      "/assets/bor2.webp",
      "/assets/bor3.webp",
      "/assets/bor4.webp",
      "/assets/bor5.webp",
    ],
    price: 2900,
    badge: null,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    desc: "Темно-коричневі туфлі з лакованої шкіри з глянцевим блиском. Модель оснащена ремінцем навколо щиколотки та високим квадратним каблуком. Форма передньої частини напівкругла. Підошва тонка, чорного кольору."
  }


];
