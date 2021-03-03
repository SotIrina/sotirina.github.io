activate(3000, 2);
console.log(window.show_new_ms);
console.log(window.show_prop);


//блок 1
addGroup("new_group", "Г-КБ1-640");
addBlock("block_1", "БГ_1", "Линейные частоты", "new_group", 0);

addProperty("block_1", "prop_1", "Захват ФАПЧ СЧ1", 0, "false");
addProperty("block_1", "prop_2", "Захват ФАПЧ СЧ2", 0, "false");
addProperty("block_1", "prop_3", "ИПК", 0, "false");
addProperty("block_1", "prop_4", "ПЧ ПК", 0, "true");
addProperty("block_1", "prop_5", "Частота ОК", 1, "1000");
addProperty("block_1", "prop_6", "Частота ОК", 1, "10");
addProperty("block_1", "prop_7", "Частота ОК", 1, "1000 Гц");

setValProperty("block_1", "prop_1", "true");
setValProperty("block_1", "prop_3", "true");
setValProperty("block_1", "prop_4", "false");

//блок 2
addGroup("new_group_2", "2Б-КБ1-640");
addBlock("block_2", "БГ_2", "Линейные частоты", "new_group_2", 0);

addProperty("block_2", "prop_1", "Захват ФАПЧ СЧ1", 0, "false");
addProperty("block_2", "prop_2", "Захват ФАПЧ СЧ2", 0, "false");
addProperty("block_2", "prop_3", "АРУ1", 1, "0");
addProperty("block_2", "prop_4", "АРУ2", 1, "0");
addProperty("block_2", "prop_5", "Частота ОК", 1, "100");
addProperty("block_2", "prop_6", "Частота ОК", 1, "100");

setValProperty("block_2", "prop_1", "true");




