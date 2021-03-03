var show_new_ms = 0;
var show_props = 5;

//создание заголовка
function setTitle(title_text) {              
	document.getElementById("title").textContent = title_text;
	return 0;
}


//полная очистка
function cleanAll() {              
	document.querySelector(".ramka").innerHTML = "";
	return 1;
}


function addGroup(group_id, group_name) {
	if (!document.getElementById(group_id)) {
		var def_prop = document.querySelector("#default_group .block");
		
		var cln = def_prop.cloneNode(true);
		cln.id = group_id;
		cln.querySelector("h4").textContent = group_name;
		cln.querySelector(".element").remove();
		
		document.getElementById("workplace").appendChild(cln);
		return true;
	}
	return false;
}

//добавить контейнер
function addBlock(block_id, name_block, subname_block, group_block_id, order_group) {              


	var if_exist = checkBlock(block_id);
	
	if (if_exist) 
		return false;	
	
	var def_prop = document.querySelector("#default_group .block .element");
	
	var cln = def_prop.cloneNode(true);
	cln.id = block_id;
	cln.querySelector(".nametop h5").textContent = name_block;
	cln.querySelector(".name h5").textContent = subname_block;	
	activateExpandBtn(cln.querySelector(".expand_btn"));
	
	var prop_list = cln.getElementsByClassName("property");
	while (prop_list.length > 0) {
		prop_list[0].remove();
	}
	
	var group = document.getElementById(group_block_id);
	
	if (group) {
		group.appendChild(cln);	
		
		
		
		return true;
	}	
	else {
		return false;
	}

}


//изменитьидентификатор блока
function changeBlockId(old_block_id, new_block_id){   
	var block = document.getElementById(old_block_id);	
	if (block) {
		block.id = new_block_id;
		return true;
	}
	else	
		return false;
	
}

//Изменить заголовок блока
function changeBlockTitle(block_id, new_title){   
	var block = document.getElementById(block_id);
	block.querySelector(".nametop h5").textContent = new_title;
}

//изменить подзаголовок блока
function changeBlockSubTitle(block_id, new_subtitle){   
	var block = document.getElementById(block_id);
	block.querySelector(".name h5").textContent = new_subtitle;	
}



//проверить наличие контейнера по id
function checkBlock(check_block_id) {              
	if (document.getElementById(check_block_id))
		return true;
	else
		return false;
}


//удалить контейнер по id
function delBlock(del_block_id){   
	if (checkBlock(del_block_id)) {
		document.getElementById(del_block_id).remove();
		return true;
	}
	else	
		return false;
}

//удалить свойство у контейнера по id
function delProperty(block_id, property_id){              
	if (checkProperty(block_id, property_id)) {
		document.querySelector("#" + block_id + " #" + property_id).remove()
	}
}


//проверить наличие свойства по id
function checkProperty(block_id, check_property_id){              
	if (document.querySelector("#" + block_id + " #" + check_property_id))
		return true;
	else
		return false
}


//задать значение свойству по id
function setValProperty(block_id, property_id, new_val){   
	if (checkProperty(block_id, property_id)) {
		const prop_el = document.querySelector("#" + block_id + " #" + property_id);
		if (prop_el.classList.contains("bool")) {
			// переключить лампочку
			const lamp = document.querySelector("#" + block_id + " #" + property_id + " .lamp");
			if (new_val == "true") {
				lamp.classList.remove("lamp_off");
				lamp.classList.add("lamp_on");
			} else {
				lamp.classList.remove("lamp_on");
				lamp.classList.add("lamp_off");
			}
		}
		
		if (prop_el.classList.contains("number")) {
			document.querySelector("#" + block_id + " #" + property_id + " .num").textContent = new_val;
		}				
		
		if (window.show_new_ms > 0) {
			prop_el.classList.add("new");
			
			setTimeout(function() {
				prop_el.classList.remove("new");
			}, window.show_new_ms);
		}
		
	}
	else
		return false;
}

//добавить в контейнер свойство по id
function addProperty(block_id, property_id, name_property, type_property, start_val) {              

	var if_exist = checkProperty(block_id, property_id);
	
	if (if_exist) 
		return false;
	
	var prop_type_str = "";
	
	if (type_property == 0) {
		prop_type_str = "bool";
	}
	else if (type_property == 1) {
		prop_type_str = "number";
	}
		
	
	var def_prop = document.querySelector("#default_group .block .property." + prop_type_str);
	
	var cln = def_prop.cloneNode(true);
	cln.id = property_id;
	cln.getElementsByClassName("prop_name")[0].textContent = name_property;
	
	var prop_count = document.getElementById(block_id).getElementsByClassName("property").length;

	
	if (prop_count >= window.show_props) {
		cln.classList.add("hide");
	}	
	
	document.getElementById(block_id).appendChild(cln);
	
	setValProperty(block_id, property_id, start_val);
}


function clearNew() {
	var new_list = document.getElementsByClassName("new");
	while (new_list.length > 0) {
		new_list[0].classList.remove("new");
	}
}

//инициализация с передачей настроек отображения
function activate(show_new_ms, show_props){              
	window.show_new_ms = show_new_ms;
	window.show_props = show_props;
	
	// showAllText(); 	 
	// не осмыслено тут, потому что в реальной работе блоки и кнопки еще не созданы
	
	return true;
}

//масштаб увеличить/уменьшить на 50%
var y=1

function Size(step){
	
	if(y<1.5){
		y=y+step;
		document.body.style.zoom = y;
	}
}

function SizeMinus(step){
	if(y>0.5){
		y=y+step;
		document.body.style.zoom = y;
	}
}	

//масштаб исходный


function SizeNormal(step){
	document.body.style.zoom = 1;
}


//скрыть/раскрыть содержимое дополнительных свойств
function showAllText(){ 
	var lst_btns = document.getElementsByClassName("expand_btn");
	
	for (var i = 0; i < lst_btns.length; i++) {
		activateExpandBtn(lst_btns[i]);
	}
};

function activateExpandBtn(btn) {
	btn.onclick = function() {		
		if (this.innerText == "»"){
			this.setAttribute("title", "Скрыть свойства");
			var props = this.parentNode.parentNode.querySelectorAll(".hide");
			console.log(props);
			for (var i = 0; i < props.length; i++) {	
				props[i].classList.remove("hide")
				props[i].classList.add("showed");
			}
		}
		else if (this.innerText == "«"){						
			this.setAttribute("title", "Раскрыть полный список свойств");
			
			var props = this.parentNode.parentNode.querySelectorAll(".showed");
			
			for (var i = 0; i < props.length; i++) {	
				props[i].classList.remove("showed");
				props[i].classList.add("hide");
			}
			
		}
		
		this.innerText = this.innerText == "»" ? "«" : "»";		
				
	};	
};












