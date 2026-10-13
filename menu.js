/*
  МЕНИ / MENU DATA
  ----------------
  Edit this file to change dishes and prices. Each dish:
    img   – file name in the images/ folder
    price – price in denars (MKD)
    tags  – optional: "house" (specialty), "veg" (vegetarian), "fast" (posno / fasting)
    mk/en – name (n) and description (d) in Macedonian and English
  NOTE: current dishes and prices are DUMMY DATA.
*/
window.MENU = [
  {
    id: "specialties",
    mk: "Специјалитети на куќата", en: "House Specialties",
    items: [
      { img: "tava.jpg", price: 650, tags: ["house"],
        mk: { n: "Тава Лешочки Манастир", d: "Нашиот специјалитет – свинско и телешко месо, печурки, пиперки и домашни зачини, бавно печено во земјена тава во фурна на дрва." },
        en: { n: "Lesok Monastery Pan", d: "Our signature dish – pork and veal with mushrooms, peppers and homemade spices, slow-baked in a clay pan in a wood-fired oven." } },
      { img: "tavce.jpg", price: 280, tags: ["house", "veg", "fast"],
        mk: { n: "Тетовско тавче гравче", d: "Познатиот тетовски грав, печен во земјено тавче со кромид, црвен пипер и сува нане." },
        en: { n: "Tetovo Tavče Gravče", d: "The famous Tetovo beans, baked in a clay dish with onion, red paprika and dried mint." } },
      { img: "piperki.jpg", price: 380, tags: [],
        mk: { n: "Полнети пиперки", d: "Сушени црвени пиперки полнети со мелено месо и ориз, печени во доматен сос." },
        en: { n: "Stuffed Peppers", d: "Dried red peppers stuffed with minced meat and rice, baked in tomato sauce." } },
      { img: "sarma.jpg", price: 360, tags: [],
        mk: { n: "Сарма", d: "Кисели зелкини листови полнети со мелено месо и ориз, бавно варени со сланина." },
        en: { n: "Sarma", d: "Sour cabbage leaves stuffed with minced meat and rice, slow-cooked with smoked bacon." } },
      { img: "musaka.jpg", price: 340, tags: [],
        mk: { n: "Мусака", d: "Слоеви од компири и мелено месо, прелиени со крем од јајца и млеко." },
        en: { n: "Moussaka", d: "Layers of potatoes and minced meat topped with a creamy egg and milk custard." } },
      { img: "gjuvec.jpg", price: 320, tags: ["veg", "fast"],
        mk: { n: "Монашки ѓувеч", d: "Посен ѓувеч од сезонски зеленчук и ориз, печен во земјена тава." },
        en: { n: "Monastery Đuveč", d: "A fasting-friendly bake of seasonal vegetables and rice in a clay pot." } }
    ]
  },
  {
    id: "starters",
    mk: "Предјадења", en: "Starters",
    items: [
      { img: "ajvar.jpg", price: 180, tags: ["veg", "fast"],
        mk: { n: "Домашен ајвар", d: "Печени црвени пиперки и модар патлиџан, бавно варени по рецепт на нашите баби." },
        en: { n: "Homemade Ajvar", d: "Roasted red peppers and aubergine, slow-cooked to our grandmothers' recipe." } },
      { img: "pindjur.jpg", price: 170, tags: ["veg", "fast"],
        mk: { n: "Пинџур", d: "Печени пиперки, домати и лук, со ладно цедено масло." },
        en: { n: "Pinjur", d: "Roasted peppers, tomatoes and garlic with cold-pressed oil." } },
      { img: "sirenje.jpg", price: 220, tags: ["veg"],
        mk: { n: "Овчо сирење", d: "Домашно бело сирење од планинските села околу Шар Планина." },
        en: { n: "Sheep's Cheese", d: "Homemade white brine cheese from the mountain villages of Šar Planina." } },
      { img: "tursija.jpg", price: 150, tags: ["veg", "fast"],
        mk: { n: "Мешана туршија", d: "Домашно кисели краставички, пиперки, зелка и морков." },
        en: { n: "Mixed Turšija", d: "Homemade pickled gherkins, peppers, cabbage and carrots." } },
      { img: "pastrmajlija.jpg", price: 350, tags: [],
        mk: { n: "Пастрмајлија", d: "Тесто од фурна на дрва со сушено свинско месо и јајце." },
        en: { n: "Pastrmajlija", d: "Wood-fired flatbread topped with cured pork and egg." } }
    ]
  },
  {
    id: "salads",
    mk: "Салати", en: "Salads",
    items: [
      { img: "shopska.jpg", price: 190, tags: ["veg"],
        mk: { n: "Шопска салата", d: "Домати, краставици, пиперки и кромид, посипани со рендано сирење." },
        en: { n: "Shopska Salad", d: "Tomatoes, cucumbers, peppers and onion topped with grated white cheese." } },
      { img: "ovcharska.jpg", price: 210, tags: ["veg"],
        mk: { n: "Овчарска салата", d: "Свеж зеленчук, варено јајце, шунка, сирење и кашкавал." },
        en: { n: "Shepherd's Salad", d: "Fresh vegetables with boiled egg, ham, white cheese and yellow cheese." } },
      { img: "kupus.jpg", price: 140, tags: ["veg", "fast"],
        mk: { n: "Зелка со морков", d: "Свежо сецкана зелка и морков со оцет и масло." },
        en: { n: "Cabbage & Carrot Salad", d: "Freshly shredded cabbage and carrot with vinegar and oil." } },
      { img: "tarator.jpg", price: 160, tags: ["veg"],
        mk: { n: "Таратор", d: "Ладен јогурт со краставица, лук, ореви и копар." },
        en: { n: "Tarator", d: "Chilled yogurt with cucumber, garlic, walnuts and dill." } }
    ]
  },
  {
    id: "grill",
    mk: "Скара и печено", en: "Grill & Roasts",
    items: [
      { img: "kebapi.jpg", price: 300, tags: [],
        mk: { n: "Кебапи (10 парчиња)", d: "Скара кебапи од мешано месо, со свеж кромид и леб од фурна." },
        en: { n: "Kebapi (10 pcs)", d: "Grilled minced-meat kebapi served with fresh onion and oven bread." } },
      { img: "pljeskavica.jpg", price: 320, tags: [],
        mk: { n: "Плескавица", d: "Сочна плескавица од јунешко месо, со ајвар и кромид." },
        en: { n: "Pljeskavica", d: "Juicy beef patty served with ajvar and onion." } },
      { img: "raznici.jpg", price: 380, tags: [],
        mk: { n: "Ражничи", d: "Свински ражничи маринирани со пиперка и мајчина душица." },
        en: { n: "Ražnjići Skewers", d: "Pork skewers marinated with paprika and wild thyme." } },
      { img: "jagnesko.jpg", price: 750, tags: ["house"],
        mk: { n: "Јагнешко печење", d: "Јагнешко месо бавно печено под сач, со печени компири." },
        en: { n: "Roast Lamb", d: "Lamb slow-roasted under a sač bell, served with roast potatoes." } },
      { img: "pastrmka.jpg", price: 480, tags: ["fast"],
        mk: { n: "Пастрмка на скара", d: "Свежа планинска пастрмка на скара, со лук и магдонос." },
        en: { n: "Grilled Trout", d: "Fresh mountain trout from the grill with garlic and parsley." } },
      { img: "kolbas.jpg", price: 290, tags: [],
        mk: { n: "Домашен колбас", d: "Домашен колбас од скара со сенф и туршија." },
        en: { n: "Homemade Sausage", d: "Grilled homemade sausage with mustard and pickles." } },
      { img: "mesano.jpg", price: 1200, tags: [],
        mk: { n: "Мешано месо за двајца", d: "Кебапи, плескавица, ражничи, колбас и пилешко, со помфрит и салата." },
        en: { n: "Mixed Grill for Two", d: "Kebapi, pljeskavica, skewers, sausage and chicken, with fries and salad." } }
    ]
  },
  {
    id: "bakery",
    mk: "Пециво", en: "Bakery",
    items: [
      { img: "zelnik.jpg", price: 250, tags: ["veg"],
        mk: { n: "Домашен зелник", d: "Рачно развлечени кори со праз и сирење, печени во тепсија." },
        en: { n: "Homemade Zelnik", d: "Hand-stretched pastry with leek and cheese, baked in a tray." } },
      { img: "burek.jpg", price: 180, tags: [],
        mk: { n: "Бурек", d: "Бурек со месо или сирење, се служи со јогурт." },
        en: { n: "Burek", d: "Burek with meat or cheese, served with yogurt." } },
      { img: "pogaca.jpg", price: 90, tags: ["veg", "fast"],
        mk: { n: "Погача од фурна", d: "Топла домашна погача од фурна на дрва." },
        en: { n: "Oven Bread", d: "Warm homemade bread from the wood-fired oven." } }
    ]
  },
  {
    id: "desserts",
    mk: "Десерти", en: "Desserts",
    items: [
      { img: "baklava.jpg", price: 150, tags: [],
        mk: { n: "Баклава", d: "Тенки кори со ореви, прелиени со сируп од мед." },
        en: { n: "Baklava", d: "Thin pastry layers with walnuts, soaked in honey syrup." } },
      { img: "tulumbi.jpg", price: 120, tags: [],
        mk: { n: "Тулумби", d: "Пржени тулумби во сладок шербет." },
        en: { n: "Tulumbi", d: "Fried dough fingers soaked in sweet syrup." } },
      { img: "kadaif.jpg", price: 150, tags: [],
        mk: { n: "Кадаиф", d: "Печени тенки нишки од тесто со ореви и шербет." },
        en: { n: "Kadaif", d: "Baked shredded pastry with walnuts and syrup." } },
      { img: "palacinki.jpg", price: 160, tags: ["veg"],
        mk: { n: "Палачинки", d: "Со домашно слатко од шумски овошја или со чоколадо и ореви." },
        en: { n: "Crêpes", d: "With homemade forest-fruit jam or chocolate and walnuts." } },
      { img: "sutlijas.jpg", price: 130, tags: ["veg"],
        mk: { n: "Сутлијаш", d: "Ориз варен во млеко со ванила и цимет." },
        en: { n: "Rice Pudding", d: "Rice cooked in milk with vanilla and cinnamon." } }
    ]
  },
  {
    id: "drinks",
    mk: "Пијалоци", en: "Drinks",
    items: [
      { img: "kafe.jpg", price: 70, tags: [],
        mk: { n: "Македонско кафе", d: "Варено во џезве, се служи со локум." },
        en: { n: "Macedonian Coffee", d: "Brewed in a džezve, served with Turkish delight." } },
      { img: "limonada.jpg", price: 120, tags: [],
        mk: { n: "Домашна лимонада", d: "Свежо цеден лимон со нане и планински мед." },
        en: { n: "Homemade Lemonade", d: "Fresh-squeezed lemon with mint and mountain honey." } },
      { img: "boza.jpg", price: 80, tags: [],
        mk: { n: "Боза", d: "Традиционален ферментиран пијалак од жито." },
        en: { n: "Boza", d: "Traditional fermented grain drink." } },
      { img: "rakija.jpg", price: 100, tags: [],
        mk: { n: "Домашна ракија (0,05 л)", d: "Гроздова или сливова ракија од месни производители." },
        en: { n: "Homemade Rakija (0.05 l)", d: "Grape or plum brandy from local producers." } },
      { img: "vranec.jpg", price: 900, tags: [],
        mk: { n: "Вранец (шише 0,75 л)", d: "Полно црвено вино од најпознатата македонска сорта." },
        en: { n: "Vranec (bottle 0.75 l)", d: "Full-bodied red wine from Macedonia's signature grape." } }
    ]
  }
];
