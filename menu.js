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
      { mk: "Кашкавал кравји", en: "Cow's yellow cheese", q: "100 гр.", p: 150, img: "u_kaskaval_kravji.jpg",
        dmk: "Зрел кравји кашкавал, исечен на тенки парчиња.", den: "Mature cow's milk yellow cheese, thinly sliced." },
      { mk: "Кашкавал овчи", en: "Sheep's yellow cheese", q: "100 гр.", p: 220, img: "u_kaskaval_ovci.jpg",
        dmk: "Полутврд овчи кашкавал со полн, благо солен вкус.", den: "Semi-hard sheep's milk yellow cheese with a full, mildly salty taste." },
      { mk: "Сирење кравјо", en: "Cow's white cheese", q: "100 гр.", p: 110, img: "u_sirenje_kravjo.jpg",
        dmk: "Бело саламурено кравјо сирење.", den: "White brined cow's milk cheese." },
      { mk: "Сирење овчо", en: "Sheep's white cheese", q: "100 гр.", p: 200, img: "u_sirenje_ovco.jpg",
        dmk: "Домашно бело овчо сирење, кремасто и солено.", den: "Homemade white sheep's milk cheese, creamy and salty." },
      { mk: "Павлака", en: "Sour cream", q: "200 гр.", img: "own_pavlaka.jpg", p: 70,
        dmk: "Густа домашна павлака, идеална со леб и скара.", den: "Thick homemade sour cream, perfect with bread and grilled dishes." },
      { mk: "Пинџур", en: "Pinjur", p: 150, img: "u_pindjur.jpg",
        dmk: "Печени пиперки, домати и лук, ситно сецкани со масло.", den: "Roasted peppers, tomatoes and garlic, finely chopped with oil." }
    ]
  },
  {
    id: "hot-starters", group: "food", mk: "Топли предјадења", en: "Hot Starters",
    items: [
      { mk: "Похован кашкавал", en: "Breaded yellow cheese", q: "100 гр.", p: 150, img: "own_pohovan_kaskaval.jpg",
        dmk: "Кашкавал во златна похована кора, се служи со тартар сос.", den: "Yellow cheese in a golden breaded crust, served with tartar sauce." },
      { mk: "Поховани тиквици", en: "Breaded zucchini", img: "own_pohovani_tikvici.jpg", p: 170,
        dmk: "Тенки тиквици во хрскава кора, со лук и кисело млеко.", den: "Thin zucchini in a crispy coating, with garlic yogurt." },
      { mk: "Похована зденка", en: "Breaded cheese wedge", q: "1 парче", img: "own_zdenka.jpg", p: 30,
        dmk: "Топено сирење зденка во хрскава похована кора.", den: "Zdenka processed cheese wedge in a crispy breaded coating." },
      { mk: "Похована пиперка", en: "Breaded pepper", q: "1 парче", img: "u_pohovana_piperka.jpg", p: 90,
        dmk: "Пиперка полнета со сирење, пржена во хрскава кора.", den: "Pepper stuffed with cheese, fried in a crispy coating." },
      { mk: "Пирошка", en: "Piroshka", q: "100 гр.", img: "own_piroska.webp", p: 90,
        dmk: "Похована палачинка полнета со шунка и кашкавал.", den: "Breaded crêpe roll filled with ham and yellow cheese." },
      { mk: "Тиквици на скара", en: "Grilled zucchini", q: "100 гр.", p: 150, img: "u_tikvici_skara.jpg",
        dmk: "Тиквици печени на скара со маслиново масло и лук.", den: "Grilled zucchini with olive oil and garlic." },
      { mk: "Печурки на скара", en: "Grilled mushrooms", q: "100 гр.", p: 150, img: "u_pecurki_skara.jpg",
        dmk: "Свежи печурки на скара со лук и магдонос.", den: "Fresh grilled mushrooms with garlic and parsley." },
      { mk: "Сирење на скара", en: "Grilled cheese", q: "100 гр.", p: 200, img: "own_sirenje_skara.jpg",
        dmk: "Сирење печено на скара, со малку маслиново масло и пипер.", den: "Grilled cheese with a drizzle of olive oil and pepper." },
      { mk: "Роловано сирење", en: "Rolled cheese", q: "100 гр.", p: 220, img: "own_rolovano_sirenje.jpg",
        dmk: "Сирење завиткано во сланина, печено на скара.", den: "Cheese wrapped in bacon, grilled." },
      { mk: "Пржено јајце", en: "Fried egg", q: "1 парче", p: 30, img: "u_przeno_jajce.jpg",
        dmk: "Јајце пржено на око.", den: "Fried egg, sunny side up." },
      { mk: "Омлет микс", en: "Mixed omelette", p: 200, img: "u_omlet.jpg",
        dmk: "Омлет со шунка, кашкавал, печурки и зеленчук.", den: "Omelette with ham, yellow cheese, mushrooms and vegetables." },
      { mk: "Англиски доручек", en: "English breakfast", p: 230, img: "u_angliski.jpg",
        dmk: "Јајца, сланина, колбас, грав, печурки и тост.", den: "Eggs, bacon, sausage, beans, mushrooms and toast." },
      { mk: "Даска похована", en: "Breaded platter", q: "мала / голема", p: [690, 990], img: "u_daska.jpg",
        dmk: "Избор од поховани предјадења – кашкавал, тиквици, пиперки, печурки и зденка.", den: "A selection of breaded starters – yellow cheese, zucchini, peppers, mushrooms and Zdenka cheese." }
    ]
  },
  {
    id: "salads", group: "food", mk: "Салати", en: "Salads",
    sizes: { mk: ["средна", "голема"], en: ["medium", "large"] },
    items: [
      { mk: "Шопска салата", en: "Shopska salad", p: [200, 350], img: "w_shopska.jpg",
        dmk: "Домати, краставици, пиперки и кромид, покриени со рендано сирење.", den: "Tomatoes, cucumbers, peppers and onion, topped with grated white cheese." },
      { mk: "Мешана салата", en: "Mixed salad", p: [200, 350], img: "own_meshana.jpg",
        dmk: "Домати, краставици, зелка, морков и марула.", den: "Tomatoes, cucumbers, cabbage, carrot and lettuce." },
      { mk: "Античка салата", en: "Antique salad", p: [250, 400], img: "u_anticka.jpg",
        dmk: "Домати, краставици, маслинки, кромид и парче сирење со оригано.", den: "Tomatoes, cucumbers, olives, onion and a slab of white cheese with oregano." },
      { mk: "Македонска салата", en: "Macedonian salad", img: "own_makedonska.jpg", p: [200, 350],
        dmk: "Печени пиперки, домати, кромид и магдонос.", den: "Roasted peppers, tomatoes, onion and parsley." },
      { mk: "Таратур салата", en: "Tarator salad", p: [150, null], img: "own_taratur.webp",
        dmk: "Кисело млеко со краставица, лук и копар.", den: "Yogurt with cucumber, garlic and dill." },
      { mk: "Краставица салата", en: "Cucumber salad", p: [120, 180], img: "u_krastavica.jpg",
        dmk: "Свежи краставици со оцет и масло.", den: "Fresh cucumbers with vinegar and oil." },
      { mk: "Зелка салата", en: "Cabbage salad", p: [100, 150], img: "u_zelka.jpg",
        dmk: "Свежо сецкана зелка со оцет и масло.", den: "Freshly shredded cabbage with vinegar and oil." },
      { mk: "Марула салата", en: "Lettuce salad", p: [90, 140], img: "own_marula.jpg",
        dmk: "Свежа марула со кромидче, оцет и масло.", den: "Fresh lettuce with spring onion, vinegar and oil." },
      { mk: "Цезар салата", en: "Caesar salad", p: [260, null], img: "u_cezar.jpg",
        dmk: "Марула, пилешко на скара, крутони, пармезан и цезар прелив.", den: "Lettuce, grilled chicken, croutons, parmesan and Caesar dressing." },
      { mk: "Цезар со кашкавал", en: "Caesar with yellow cheese", p: [300, null], img: "u_cezar_kaskaval.jpg",
        dmk: "Цезар салата збогатена со рендан кашкавал.", den: "Caesar salad topped with grated yellow cheese." }
    ]
  },
  {
    id: "grill", group: "food", mk: "Главни јадења на скара", en: "Grilled Main Dishes",
    items: [
      { mk: "Плескавица", en: "Pljeskavica", q: "300 гр.", p: 220, img: "u_pleskavica.jpg",
        dmk: "Сочна плескавица од мелено месо на скара, со кромид.", den: "Juicy grilled minced-meat patty, served with onion." },
      { mk: "Шарска плескавица", en: "Šar pljeskavica", q: "300 гр.", p: 260, img: "lesok_sarska.jpg",
        dmk: "Плескавица полнета со кашкавал и шунка.", den: "Patty stuffed with yellow cheese and ham." },
      { mk: "Девојачка плескавица", en: "\"Maiden's\" pljeskavica", q: "300 гр.", img: "u_devojacka.jpg", p: 260,
        dmk: "Плескавица полнета со сирење и зеленчук.", den: "Patty stuffed with white cheese and vegetables." },
      { mk: "Шарско-девојачка", en: "Šar-maiden's pljeskavica", q: "300 гр.", p: 300, img: "u_sarsko_devojacka.jpg",
        dmk: "Комбинација од шарска и девојачка плескавица.", den: "A combination of Šar and \"maiden's\" patties." },
      { mk: "Полнета плескавица", en: "Stuffed pljeskavica", q: "300 гр.", img: "u_polneta.jpg", p: 300,
        dmk: "Плескавица полнета со кашкавал, печена на скара.", den: "Grilled patty stuffed with melted yellow cheese." },
      { mk: "Бела вешалица", en: "White pork steak", q: "280 гр.", p: 280, img: "u_bela_vesalica.jpg",
        dmk: "Свински врат на скара, сочен и благо зачинет.", den: "Grilled pork neck steak, juicy and lightly seasoned." },
      { mk: "Вешалица со печурки и кашкавал", en: "Pork steak with mushrooms and yellow cheese", p: 300, img: "lesok_vesalica_pecurki.jpg",
        dmk: "Свински врат на скара, прелиен со печурки и стопен кашкавал.", den: "Grilled pork neck topped with mushrooms and melted yellow cheese." },
      { mk: "Ролована вешалица", en: "Rolled pork steak", q: "300 гр.", p: 300, img: "own_rolovana_vesalica.jpg",
        dmk: "Свински врат ролуван со кашкавал и шунка.", den: "Pork neck rolled with yellow cheese and ham." },
      { mk: "Пилешки стек", en: "Chicken steak", q: "250 гр.", p: 280, img: "lesok_pileski_stek.jpg",
        dmk: "Пилешки гради на скара.", den: "Grilled chicken breast." },
      { mk: "Стек со печурки и кашкавал", en: "Steak with mushrooms and yellow cheese", q: "250 гр.", p: 300, img: "u_stek_pecurki.jpg",
        dmk: "Пилешки стек прелиен со печурки и стопен кашкавал.", den: "Chicken steak topped with mushrooms and melted yellow cheese." },
      { mk: "Похован стек", en: "Breaded steak", q: "250 гр.", p: 280, img: "u_pohovan_stek.jpg",
        dmk: "Пилешки стек во хрскава похована кора.", den: "Chicken steak in a crispy breaded crust." },
      { mk: "Стек во кари сос", en: "Steak in curry sauce", p: 290, img: "own_kari.jpg",
        dmk: "Пилешки стек во кремаст кари сос.", den: "Chicken steak in a creamy curry sauce." },
      { mk: "Стек во бел сос", en: "Steak in white sauce", p: 290, img: "own_bel_sos.jpg",
        dmk: "Пилешки стек во кремаст бел сос со печурки.", den: "Chicken steak in a creamy white mushroom sauce." },
      { mk: "Пилешки прсти", en: "Chicken fingers", q: "250 гр.", p: 280, img: "own_prsti.jpg",
        dmk: "Хрскави поховани пилешки ленти со сос.", den: "Crispy breaded chicken strips with dip." },
      { mk: "Пилешки батак", en: "Chicken drumstick", q: "220 гр.", p: 270, img: "u_batak.jpg",
        dmk: "Пилешки батак на скара, маринирани со зачини.", den: "Grilled chicken drumsticks marinated with spices." },
      { mk: "Пилешки увијач", en: "Chicken roll (uvijač)", q: "300 гр.", p: 300, img: "u_pileski_uvijac.jpg",
        dmk: "Пилешко месо завиткано со кашкавал и сланина.", den: "Chicken rolled with yellow cheese and bacon." },
      { mk: "Свински увијач", en: "Pork roll (uvijač)", q: "300 гр.", p: 300, img: "u_svinski_uvijac.jpg",
        dmk: "Свинско месо завиткано со кашкавал и сланина.", den: "Pork rolled with yellow cheese and bacon." },
      { mk: "Двојник", en: "Dvojnik (double portion)", q: "450 гр.", p: 600, img: "u_dvojnik.jpg",
        dmk: "Двојна порција мешано месо на скара.", den: "Double portion of mixed grilled meat." },
      { mk: "Домашно жуле", en: "Homemade žule", q: "200 гр.", p: 200, img: "own_zule.jpg",
        dmk: "Домашна свинска колбасица на скара.", den: "Homemade grilled pork sausage." },
      { mk: "Бечка шницла", en: "Wiener schnitzel", q: "280 гр.", p: 300, img: "u_pohovan_stek.jpg",
        dmk: "Тенко месо во хрскава похована кора, со лимон.", den: "Thin breaded schnitzel with lemon." },
      { mk: "Ребро", en: "Ribs", q: "1 кг.", p: 900, img: "lesok_rebro.jpg",
        dmk: "Свински ребра на скара.", den: "Grilled pork ribs." },
      { mk: "Ребро во фурна", en: "Oven-baked ribs", q: "1 кг.", p: 1300, img: "u_rebro_furna.jpg",
        dmk: "Свински ребра бавно печени во фурна.", den: "Pork ribs slow-baked in the oven." },
      { mk: "Пастрмка", en: "Trout", q: "1 кг.", p: 1300, img: "u_pastrmka.jpg",
        dmk: "Свежа пастрмка на скара, со лимон и магдонос.", den: "Fresh grilled trout with lemon and parsley." }
    ]
  },
  {
    id: "to-order", group: "food", mk: "Јадења по нарачка", en: "Dishes to Order",
    note: {
      mk: "Се нарачува 1 ден однапред (24 часа) за да биде подготвено. Цена по договор.",
      en: "Order 1 day in advance (24 hours) so it can be prepared. Price on request."
    },
    items: [
      { mk: "Тава Гравче", en: "Tava Gravče (baked beans)", p: "ask", img: "own_tava_gravce.jpg",
        dmk: "Традиционален грав печен во земјена тава со кромид и пиперка.", den: "Traditional beans baked in a clay pan with onion and paprika." },
      { mk: "Домашна пита (комат)", en: "Homemade pie (piece)", p: "ask", img: "own_pita.jpg",
        dmk: "Рачно развлечена домашна пита со сирење или месо.", den: "Hand-stretched homemade pie with cheese or meat." },
      { mk: "Печено прасе / Свинско печење", en: "Roast piglet / Roast pork", p: "ask", img: "u_prase.jpg",
        dmk: "Бавно печено прасе со хрскава кожичка.", den: "Slow-roasted piglet with crispy crackling." },
      { mk: "Тава „Манастирски ресторан“", en: "\"Monastery Restaurant\" pan", p: "ask", img: "u_tava_manastir.jpg",
        dmk: "Специјалитет на куќата – месо и зеленчук печени во земјена тава.", den: "House specialty – meat and vegetables baked in a clay pan." },
      { mk: "Сарма", en: "Sarma", p: "ask", img: "w_sarma.jpg", credit: "Photo: Shixart1985 / Wikimedia Commons, CC BY 2.0",
        dmk: "Кисели зелкини листови полнети со месо и ориз.", den: "Sour cabbage leaves stuffed with meat and rice." },
      { mk: "Полнети пиперки", en: "Stuffed peppers", p: "ask", img: "u_polneti_piperki.jpg",
        dmk: "Пиперки полнети со мелено месо и ориз, во доматен сос.", den: "Peppers stuffed with minced meat and rice in tomato sauce." },
      { mk: "Мусака", en: "Moussaka", p: "ask", img: "u_musaka.jpg",
        dmk: "Слоеви од компири и мелено месо, печени со крем.", den: "Layers of potatoes and minced meat, baked with a creamy topping." },
      { mk: "Гулаш", en: "Goulash", p: "ask", img: "own_gulas.jpg",
        dmk: "Бавно варено месо во густ сос со пиперка.", den: "Slow-cooked meat in a rich paprika sauce." },
      { mk: "Коленица", en: "Pork knuckle", p: "ask", img: "own_kolenica.jpg",
        dmk: "Свинска коленица бавно печена до мекост.", den: "Pork knuckle slow-roasted until tender." }
    ]
  },
  {
    id: "nuts", group: "food", mk: "Апетисани", en: "Nuts",
    items: [
      { mk: "Лешници", en: "Hazelnuts", q: "100 гр.", p: 200, img: "u_lesnici.jpg",
        dmk: "Печени лешници.", den: "Roasted hazelnuts." },
      { mk: "Бадеми", en: "Almonds", q: "100 гр.", p: 180, img: "u_bademi.jpg",
        dmk: "Печени бадеми.", den: "Roasted almonds." },
      { mk: "Индиски ореви", en: "Cashews", q: "100 гр.", p: 180, img: "u_indiski.jpg",
        dmk: "Печени индиски ореви.", den: "Roasted cashews." },
      { mk: "Микс", en: "Mixed nuts", q: "100 гр.", p: 200, img: "u_miks.jpg",
        dmk: "Мешавина од лешници, бадеми и индиски ореви.", den: "A mix of hazelnuts, almonds and cashews." }
    ]
  },
  {
    id: "desserts", group: "food", mk: "Десерти", en: "Desserts",
    items: [
      { mk: "Палачинка со крем", en: "Crêpe with cream", p: 170, img: "u_palacinka.jpg",
        dmk: "Тенка палачинка со чоколаден крем.", den: "Thin crêpe with chocolate cream." },
      { mk: "Вафла со крем", en: "Waffle with cream", p: 120, img: "u_vafla.jpg",
        dmk: "Топла вафла со чоколаден крем.", den: "Warm waffle with chocolate cream." }
    ]
  },
  {
    id: "hot-drinks", group: "drinks", mk: "Топли напитоци", en: "Hot Drinks",
    items: [
      { mk: "Македонско кафе", en: "Macedonian coffee", p: 60, img: "u_kafe.jpg" },
      { mk: "Еспресо", en: "Espresso", img: "u_espreso.jpg", p: 60 },
      { mk: "Макијато", en: "Macchiato", img: "u_makijato.jpg", p: [60, 70] },
      { mk: "Ладно макијато", en: "Iced macchiato", img: "own_ladno_makijato.jpg", p: 90 },
      { mk: "Капучино", en: "Cappuccino", img: "u_kapucino.jpg", p: 80 },
      { mk: "Нес кафе", en: "Nescafé", img: "own_nes.jpg", p: 120 },
      { mk: "Чај", en: "Tea", img: "own_caj.jpg", p: 60 },
      { mk: "Млеко", en: "Milk", img: "u_mleko.jpg", p: 60 },
      { mk: "Салеп", en: "Salep", img: "u_salep.jpg", p: 90 },
      { mk: "Топло чоколадо", en: "Hot chocolate", img: "own_cokolado.jpg", p: 100 },
      { mk: "Какао", en: "Cocoa", img: "u_kakao.jpg", p: 60 }
    ]
  },
  {
    id: "soft-drinks", group: "drinks", mk: "Безалкохолни пијалоци", en: "Soft Drinks",
    items: [
      { mk: "Пепси Кола", en: "Pepsi Cola", q: "0,25 л.", img: "u_pepsi.jpg", p: 100 },
      { mk: "Миринда портокал", en: "Mirinda orange", q: "0,25 л.", img: "u_mirinda_portokal.jpg", p: 100 },
      { mk: "Миринда лимон", en: "Mirinda lemon", q: "0,25 л.", img: "u_mirinda_limon.jpg", p: 100 },
      { mk: "7up", en: "7up", q: "0,25 л.", img: "u_sevenup.jpg", p: 100 },
      { mk: "Газоза", en: "Gazoza (lemon soda)", q: "0,25 л.", img: "u_gazoza.jpg", p: 100 },
      { mk: "Вода негазирана", en: "Still water", q: "0,25 л. / 0,7 л.", img: "u_voda.jpg", p: [60, 120] },
      { mk: "Вода газирана", en: "Sparkling water", q: "0,25 л. / 0,7 л.", img: "u_voda_gaz.jpg", p: [60, 120] },
      { mk: "Негазиран сок /Gusto/", en: "Juice /Gusto/", q: "0,2 л.", img: "u_sok.jpg", p: 90,
        dmk: "портокал, јаболка, боровница, праска", den: "orange, apple, blueberry, peach" },
      { mk: "Цеден лимон", en: "Fresh lemon juice", q: "0,2 л.", p: 100, img: "u_ceden_limon.jpg" },
      { mk: "Цеден портокал", en: "Fresh orange juice", q: "0,2 л.", img: "u_ceden_portokal.jpg", p: 150 },
      { mk: "Цеден микс", en: "Fresh mixed juice", q: "0,2 л.", img: "u_ceden_miks.jpg", p: 150,
        dmk: "лимон и портокал", den: "lemon and orange" }
    ]
  },
  {
    id: "beer", group: "drinks", mk: "Пива", en: "Beer",
    items: [
      { mk: "Златен даб", en: "Zlaten Dab", q: "0,3 л. / 0,5 л.", img: "u_pivo_zlaten.jpg", p: 120 },
      { mk: "Крали Марко", en: "Krali Marko", q: "0,5 л.", img: "u_pivo_krali.jpg", p: 120 },
      { mk: "Туборг", en: "Tuborg", q: "0,33 л.", img: "u_pivo_tuborg.jpg", p: 170 },
      { mk: "Carlsberg", en: "Carlsberg", q: "0,33 л.", img: "u_pivo_carlsberg.jpg", p: 200 },
      { mk: "Blanc", en: "Blanc", q: "0,3 л.", img: "u_pivo_blanc.jpg", p: 240 }
    ]
  },
  {
    id: "wine-white", group: "drinks", mk: "Тиквеш вина – бели", en: "Tikveš Wines – White",
    items: [
      { mk: "Смедеревка", en: "Smederevka", q: "0,5 л. / 1 л.", img: "u_belo_1.jpg", p: [220, 400] },
      { mk: "Александрија", en: "Alexandria", q: "0,187 л. / 0,7 л.", img: "u_belo_2.jpg", p: [220, 800] },
      { mk: "Александрија cuvee", en: "Alexandria Cuvée", q: "0,7 л.", img: "u_belo_3.jpg", p: 1300 },
      { mk: "Темјаника", en: "Temjanika", q: "0,187 л. / 0,7 л.", img: "u_belo_4.jpg", p: [220, 800] },
      { mk: "Траминец", en: "Traminer", q: "0,187 л. / 0,7 л.", img: "u_belo_1.jpg", p: [220, 800] }
    ]
  },
  {
    id: "wine-rose", group: "drinks", mk: "Тиквеш вина – розе", en: "Tikveš Wines – Rosé",
    items: [
      { mk: "Тиквеш розе", en: "Tikveš Rosé", q: "0,5 л. / 1 л.", img: "u_roze_1.jpg", p: [220, 400] },
      { mk: "Тиквеш розе", en: "Tikveš Rosé", q: "0,187 л. / 0,7 л.", img: "u_roze_2.jpg", p: [220, 800] },
      { mk: "Александрија розе", en: "Alexandria Rosé", q: "0,187 л. / 0,7 л.", img: "u_roze_3.jpg", p: [220, 800] }
    ]
  },
  {
    id: "wine-red", group: "drinks", mk: "Тиквеш вина – црвени", en: "Tikveš Wines – Red",
    items: [
      { mk: "Кратошија", en: "Kratošija", q: "0,5 л. / 1 л.", img: "u_crveno_1.jpg", p: [220, 400] },
      { mk: "Александрија", en: "Alexandria", q: "0,187 л. / 0,7 л.", img: "u_crveno_2.jpg", p: [220, 800] },
      { mk: "Александрија cuvee", en: "Alexandria Cuvée", q: "0,7 л.", img: "u_crveno_3.jpg", p: 1300 },
      { mk: "Т'га за југ", en: "T'ga za Jug", q: "0,187 л. / 0,7 л.", img: "u_crveno_4.jpg", p: [220, 800] }
    ]
  },
  {
    id: "spirits", group: "drinks", mk: "Жестоки пијалоци", en: "Spirits",
    items: [
      { mk: "Тиквешка Жолта", en: "Tikveška Žolta", q: "0,05 л.", img: "u_shot.jpg", p: 100 },
      { mk: "Мартини", en: "Martini", q: "0,05 л.", img: "own_martini.jpg", p: 130 },
      { mk: "Бовин класик", en: "Bovin Classic", q: "0,05 л.", img: "u_shot.jpg", p: 100 },
      { mk: "Марков манастир", en: "Markov Manastir", q: "0,05 л.", img: "u_shot.jpg", p: 140 },
      { mk: "Свети Трифун", en: "Sveti Trifun", q: "0,05 л.", img: "u_shot.jpg", p: 140 },
      { mk: "Домашна сливова", en: "Homemade plum brandy", q: "0,05 л.", img: "u_shot.jpg", p: 110 },
      { mk: "Домашна дуњовача", en: "Homemade quince brandy", q: "0,05 л.", img: "u_shot.jpg", p: 110 },
      { mk: "Домашна ракија", en: "Homemade rakija", q: "0,05 л.", p: 110, img: "u_shot.jpg" },
      { mk: "Узо 7", en: "Ouzo 7", q: "0,05 л.", img: "u_shots.jpg", p: 100 },
      { mk: "Узо Плумари", en: "Ouzo Plomari", q: "0,05 л.", img: "u_shots.jpg", p: 120 },
      { mk: "Мастика", en: "Mastika", q: "0,05 л.", img: "u_shots.jpg", p: 100 },
      { mk: "Коњак", en: "Cognac", q: "0,05 л.", img: "u_konjak.jpg", p: 100 },
      { mk: "Шток", en: "Stock", q: "0,05 л.", img: "u_shot.jpg", p: 120 },
      { mk: "Водка Вигор", en: "Vodka Vigor", q: "0,05 л.", img: "u_vodka_shots.jpg", p: 100 },
      { mk: "Водка Смирноф", en: "Vodka Smirnoff", q: "0,05 л.", img: "u_vodka_smirnoff.jpg", p: 120 }
    ]
  }
];
