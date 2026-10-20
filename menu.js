/*
  МЕНИ / MENU DATA  (source: Meni.pdf from the restaurant)
  ---------------------------------------------------------
  Each item:
    mk / en – dish name in Macedonian / English
    q       – quantity as written on the menu (e.g. "300 гр.", "0,25 л."); English is converted automatically
    p       – price in denars:  220            one price
                                [200, 350]     two prices (e.g. medium / large, glass / bottle)
                                [150, null]    second size not available (shown as one price)
                                "ask"          price on request ("по договор")
    img     – optional photo from the images/ folder
    dmk/den – optional small note under the name
  Category options:
    group – "food" or "drinks" (which start-screen choice shows it)
    sizes – labels for two-price columns, e.g. medium / large
    note  – short notice shown under the category title
*/
window.MENU = [
  {
    id: "cold-starters", group: "food", mk: "Ладни предјадења", en: "Cold Starters",
    items: [
      { mk: "Кашкавал кравји", en: "Cow's yellow cheese", q: "100 гр.", p: 150, img: "u_kaskaval_kravji.jpg" },
      { mk: "Кашкавал овчи", en: "Sheep's yellow cheese", q: "100 гр.", p: 220, img: "u_kaskaval_ovci.jpg" },
      { mk: "Сирење кравјо", en: "Cow's white cheese", q: "100 гр.", p: 110, img: "u_sirenje_kravjo.jpg" },
      { mk: "Сирење овчо", en: "Sheep's white cheese", q: "100 гр.", p: 200, img: "u_sirenje_ovco.jpg" },
      { mk: "Павлака", en: "Sour cream", q: "200 гр.", p: 70 },
      { mk: "Пинџур", en: "Pinjur", p: 150, img: "u_pindjur.jpg" }
    ]
  },
  {
    id: "hot-starters", group: "food", mk: "Топли предјадења", en: "Hot Starters",
    items: [
      { mk: "Похован кашкавал", en: "Breaded yellow cheese", q: "100 гр.", p: 150, img: "u_pohovan_kaskaval.jpg" },
      { mk: "Поховани тиквици", en: "Breaded zucchini", p: 170 },
      { mk: "Похована зденка", en: "Breaded cheese wedge", q: "1 парче", p: 30 },
      { mk: "Похована пиперка", en: "Breaded pepper", q: "1 парче", p: 90 },
      { mk: "Пирошка", en: "Piroshka", q: "100 гр.", p: 90 },
      { mk: "Тиквици на скара", en: "Grilled zucchini", q: "100 гр.", p: 150, img: "u_tikvici_skara.jpg" },
      { mk: "Печурки на скара", en: "Grilled mushrooms", q: "100 гр.", p: 150, img: "u_pecurki_skara.jpg" },
      { mk: "Сирење на скара", en: "Grilled cheese", q: "100 гр.", p: 200, img: "u_sirenje_skara.jpg" },
      { mk: "Ролувано сирење", en: "Rolled cheese", q: "100 гр.", p: 220, img: "u_rolovano_sirenje.jpg" },
      { mk: "Пржено јајце", en: "Fried egg", q: "1 парче", p: 30, img: "u_przeno_jajce.jpg" },
      { mk: "Омлет микс", en: "Mixed omelette", p: 200, img: "u_omlet.jpg" },
      { mk: "Англиски доручек", en: "English breakfast", p: 230, img: "u_angliski.jpg" },
      { mk: "Даска похована", en: "Breaded platter", q: "мала / голема", p: [690, 990], img: "u_daska.jpg" }
    ]
  },
  {
    id: "salads", group: "food", mk: "Салати", en: "Salads",
    sizes: { mk: ["средна", "голема"], en: ["medium", "large"] },
    items: [
      { mk: "Шопска салата", en: "Shopska salad", p: [200, 350], img: "shopska.jpg" },
      { mk: "Мешана салата", en: "Mixed salad", p: [200, 350], img: "u_meshana.jpg" },
      { mk: "Античка салата", en: "Antique salad", p: [250, 400], img: "u_anticka.jpg" },
      { mk: "Македонска салата", en: "Macedonian salad", p: [200, 350] },
      { mk: "Таратур салата", en: "Tarator salad", p: [150, null], img: "u_taratur.jpg" },
      { mk: "Краставица салата", en: "Cucumber salad", p: [120, 180], img: "u_krastavica.jpg" },
      { mk: "Зелка салата", en: "Cabbage salad", p: [100, 150], img: "u_zelka.jpg" },
      { mk: "Марула салата", en: "Lettuce salad", p: [90, 140], img: "u_marula.jpg" },
      { mk: "Цезар салата", en: "Caesar salad", p: [260, null], img: "u_cezar.jpg" },
      { mk: "Цезар со кашкавал", en: "Caesar with yellow cheese", p: [300, null], img: "u_cezar_kaskaval.jpg" }
    ]
  },
  {
    id: "grill", group: "food", mk: "Главни јадења на скара", en: "Grilled Main Dishes",
    items: [
      { mk: "Плескавица", en: "Pljeskavica", q: "300 гр.", p: 220, img: "u_pleskavica.jpg" },
      { mk: "Шарска плескавица", en: "Šar pljeskavica", q: "300 гр.", p: 260, img: "u_sarska.jpg" },
      { mk: "Девојачка плескавица", en: "\"Maiden's\" pljeskavica", q: "300 гр.", p: 260 },
      { mk: "Шарско-девојачка", en: "Šar-maiden's pljeskavica", q: "300 гр.", p: 300, img: "u_sarsko_devojacka.jpg" },
      { mk: "Полнета плескавица", en: "Stuffed pljeskavica", q: "300 гр.", p: 300 },
      { mk: "Бела вешалица", en: "White pork steak", q: "280 гр.", p: 280, img: "u_bela_vesalica.jpg" },
      { mk: "Вешалица со печурки и кашкавал", en: "Pork steak with mushrooms and yellow cheese", p: 300, img: "u_vesalica_pecurki.jpg" },
      { mk: "Ролувана вешалица", en: "Rolled pork steak", q: "300 гр.", p: 300, img: "u_rolovana_vesalica.jpg" },
      { mk: "Пилешки стек", en: "Chicken steak", q: "250 гр.", p: 280, img: "u_pileski_stek.jpg" },
      { mk: "Стек со печурки и кашкавал", en: "Steak with mushrooms and yellow cheese", q: "250 гр.", p: 300, img: "u_stek_pecurki.jpg" },
      { mk: "Похован стек", en: "Breaded steak", q: "250 гр.", p: 280, img: "u_pohovan_stek.jpg" },
      { mk: "Стек во кари сос", en: "Steak in curry sauce", p: 290, img: "u_kari.jpg" },
      { mk: "Стек во бел сос", en: "Steak in white sauce", p: 290, img: "u_bel_sos.jpg" },
      { mk: "Пилешки прсти", en: "Chicken fingers", q: "250 гр.", p: 280, img: "u_prsti.jpg" },
      { mk: "Пилешки батак", en: "Chicken drumstick", q: "220 гр.", p: 270, img: "u_batak.jpg" },
      { mk: "Пилешки увијач", en: "Chicken roll (uvijač)", q: "300 гр.", p: 300, img: "u_pileski_uvijac.jpg" },
      { mk: "Свински увијач", en: "Pork roll (uvijač)", q: "300 гр.", p: 300, img: "u_svinski_uvijac.jpg" },
      { mk: "Двојник", en: "Dvojnik (double portion)", q: "450 гр.", p: 600, img: "u_dvojnik.jpg" },
      { mk: "Домашно жуле", en: "Homemade žule", q: "200 гр.", p: 200, img: "u_zule.jpg" },
      { mk: "Бечка шницла", en: "Wiener schnitzel", q: "280 гр.", p: 300, img: "u_pohovan_stek.jpg" },
      { mk: "Ребро", en: "Ribs", q: "1 кг.", p: 900, img: "u_rebro.jpg" },
      { mk: "Ребро во фурна", en: "Oven-baked ribs", q: "1 кг.", p: 1300, img: "u_rebro_furna.jpg" },
      { mk: "Пастрмка", en: "Trout", q: "1 кг.", p: 1300, img: "u_pastrmka.jpg" }
    ]
  },
  {
    id: "to-order", group: "food", mk: "Јадења по нарачка", en: "Dishes to Order",
    note: {
      mk: "Се нарачува 1 ден однапред (24 часа) за да биде подготвено. Цена по договор.",
      en: "Order 1 day in advance (24 hours) so it can be prepared. Price on request."
    },
    items: [
      { mk: "Тава Гравче", en: "Tava Gravče (baked beans)", p: "ask", img: "tavce.jpg" },
      { mk: "Домашна пита (комат)", en: "Homemade pie (piece)", p: "ask", img: "u_pita.jpg" },
      { mk: "Печено прасе / Свинско печење", en: "Roast piglet / Roast pork", p: "ask", img: "u_prase.jpg" },
      { mk: "Тава „Манастирски ресторан“", en: "\"Monastery Restaurant\" pan", p: "ask", img: "u_tava_manastir.jpg" },
      { mk: "Сарма", en: "Sarma", p: "ask", img: "sarma.jpg" },
      { mk: "Полнети пиперки", en: "Stuffed peppers", p: "ask", img: "u_polneti_piperki.jpg" },
      { mk: "Мусака", en: "Moussaka", p: "ask", img: "musaka.jpg" },
      { mk: "Гулаш", en: "Goulash", p: "ask", img: "u_gulas.jpg" },
      { mk: "Коленица", en: "Pork knuckle", p: "ask", img: "u_kolenica.jpg" }
    ]
  },
  {
    id: "nuts", group: "food", mk: "Апетисани", en: "Nuts",
    items: [
      { mk: "Лешници", en: "Hazelnuts", q: "100 гр.", p: 200, img: "u_lesnici.jpg" },
      { mk: "Бадеми", en: "Almonds", q: "100 гр.", p: 180, img: "u_bademi.jpg" },
      { mk: "Индиски ореви", en: "Cashews", q: "100 гр.", p: 180, img: "u_indiski.jpg" },
      { mk: "Микс", en: "Mixed nuts", q: "100 гр.", p: 200, img: "u_miks.jpg" }
    ]
  },
  {
    id: "desserts", group: "food", mk: "Десерти", en: "Desserts",
    items: [
      { mk: "Палачинка со крем", en: "Crêpe with cream", p: 170, img: "u_palacinka.jpg" },
      { mk: "Вафла со крем", en: "Waffle with cream", p: 120, img: "u_vafla.jpg" }
    ]
  },
  {
    id: "hot-drinks", group: "drinks", mk: "Топли напитоци", en: "Hot Drinks",
    items: [
      { mk: "Македонско кафе", en: "Macedonian coffee", p: 60, img: "kafe.jpg" },
      { mk: "Еспресо", en: "Espresso", p: 60 },
      { mk: "Макијато", en: "Macchiato", p: [60, 70] },
      { mk: "Ладно макијато", en: "Iced macchiato", p: 90 },
      { mk: "Капучино", en: "Cappuccino", p: 80 },
      { mk: "Нес кафе", en: "Nescafé", p: 120 },
      { mk: "Чај", en: "Tea", p: 60 },
      { mk: "Млеко", en: "Milk", p: 60 },
      { mk: "Салеп", en: "Salep", p: 90 },
      { mk: "Топло чоколадо", en: "Hot chocolate", p: 100 },
      { mk: "Какао", en: "Cocoa", p: 60 }
    ]
  },
  {
    id: "soft-drinks", group: "drinks", mk: "Безалкохолни пијалоци", en: "Soft Drinks",
    items: [
      { mk: "Пепси Кола", en: "Pepsi Cola", q: "0,25 л.", p: 100 },
      { mk: "Миринда портокал", en: "Mirinda orange", q: "0,25 л.", p: 100 },
      { mk: "Миринда лимон", en: "Mirinda lemon", q: "0,25 л.", p: 100 },
      { mk: "7up", en: "7up", q: "0,25 л.", p: 100 },
      { mk: "Газоза", en: "Gazoza (lemon soda)", q: "0,25 л.", p: 100 },
      { mk: "Вода негазирана", en: "Still water", q: "0,25 л. / 0,7 л.", p: [60, 120] },
      { mk: "Вода газирана", en: "Sparkling water", q: "0,25 л. / 0,7 л.", p: [60, 120] },
      { mk: "Негазиран сок /Gusto/", en: "Juice /Gusto/", q: "0,2 л.", p: 90,
        dmk: "портокал, јаболка, боровница, праска", den: "orange, apple, blueberry, peach" },
      { mk: "Цеден лимон", en: "Fresh lemon juice", q: "0,2 л.", p: 100, img: "limonada.jpg" },
      { mk: "Цеден портокал", en: "Fresh orange juice", q: "0,2 л.", p: 150 },
      { mk: "Цеден микс", en: "Fresh mixed juice", q: "0,2 л.", p: 150,
        dmk: "лимон и портокал", den: "lemon and orange" }
    ]
  },
  {
    id: "beer", group: "drinks", mk: "Пива", en: "Beer",
    items: [
      { mk: "Златен даб", en: "Zlaten Dab", q: "0,3 л. / 0,5 л.", p: 120 },
      { mk: "Крали Марко", en: "Krali Marko", q: "0,5 л.", p: 120 },
      { mk: "Туборг", en: "Tuborg", q: "0,33 л.", p: 170 },
      { mk: "Carlsberg", en: "Carlsberg", q: "0,33 л.", p: 200 },
      { mk: "Blanc", en: "Blanc", q: "0,3 л.", p: 240 }
    ]
  },
  {
    id: "wine-white", group: "drinks", mk: "Тиквеш вина – бели", en: "Tikveš Wines – White",
    items: [
      { mk: "Смедеревка", en: "Smederevka", q: "0,5 л. / 1 л.", p: [220, 400] },
      { mk: "Александрија", en: "Alexandria", q: "0,187 л. / 0,7 л.", p: [220, 800] },
      { mk: "Александрија cuvee", en: "Alexandria Cuvée", q: "0,7 л.", p: 1300 },
      { mk: "Темјаника", en: "Temjanika", q: "0,187 л. / 0,7 л.", p: [220, 800] },
      { mk: "Траминец", en: "Traminer", q: "0,187 л. / 0,7 л.", p: [220, 800] }
    ]
  },
  {
    id: "wine-rose", group: "drinks", mk: "Тиквеш вина – розе", en: "Tikveš Wines – Rosé",
    items: [
      { mk: "Тиквеш розе", en: "Tikveš Rosé", q: "0,5 л. / 1 л.", p: [220, 400] },
      { mk: "Тиквеш розе", en: "Tikveš Rosé", q: "0,187 л. / 0,7 л.", p: [220, 800] },
      { mk: "Александрија розе", en: "Alexandria Rosé", q: "0,187 л. / 0,7 л.", p: [220, 800] }
    ]
  },
  {
    id: "wine-red", group: "drinks", mk: "Тиквеш вина – црвени", en: "Tikveš Wines – Red",
    items: [
      { mk: "Кратошија", en: "Kratošija", q: "0,5 л. / 1 л.", p: [220, 400] },
      { mk: "Александрија", en: "Alexandria", q: "0,187 л. / 0,7 л.", p: [220, 800] },
      { mk: "Александрија cuvee", en: "Alexandria Cuvée", q: "0,7 л.", p: 1300 },
      { mk: "Т'га за југ", en: "T'ga za Jug", q: "0,187 л. / 0,7 л.", p: [220, 800] }
    ]
  },
  {
    id: "spirits", group: "drinks", mk: "Жестоки пијалоци", en: "Spirits",
    items: [
      { mk: "Тиквешка Жолта", en: "Tikveška Žolta", q: "0,05 л.", p: 100 },
      { mk: "Мартини", en: "Martini", q: "0,05 л.", p: 130 },
      { mk: "Бовин класик", en: "Bovin Classic", q: "0,05 л.", p: 100 },
      { mk: "Марков манастир", en: "Markov Manastir", q: "0,05 л.", p: 140 },
      { mk: "Свети Трифун", en: "Sveti Trifun", q: "0,05 л.", p: 140 },
      { mk: "Домашна сливова", en: "Homemade plum brandy", q: "0,05 л.", p: 110 },
      { mk: "Домашна дуњовача", en: "Homemade quince brandy", q: "0,05 л.", p: 110 },
      { mk: "Домашна ракија", en: "Homemade rakija", q: "0,05 л.", p: 110, img: "rakija.jpg" },
      { mk: "Узо 7", en: "Ouzo 7", q: "0,05 л.", p: 100 },
      { mk: "Узо Плумари", en: "Ouzo Plomari", q: "0,05 л.", p: 120 },
      { mk: "Мастика", en: "Mastika", q: "0,05 л.", p: 100 },
      { mk: "Коњак", en: "Cognac", q: "0,05 л.", p: 100 },
      { mk: "Шток", en: "Stock", q: "0,05 л.", p: 120 },
      { mk: "Водка Вигор", en: "Vodka Vigor", q: "0,05 л.", p: 100 },
      { mk: "Водка Смирноф", en: "Vodka Smirnoff", q: "0,05 л.", p: 120 }
    ]
  }
];
