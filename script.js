flg = false;
flg_first = false;
flg_second = false;
selected = "";
type_first = "00";
type_second = "00";
type_first_list = [];
type_second_list = [];
function init(){
	inittabs();
	initSwipe(document.body);
	// 攻撃側
	document.querySelectorAll(".header-row").forEach(element => {
		element.addEventListener("click",function(params) {
			if(selected === params.srcElement.parentElement.classList[1]){
				document.querySelectorAll("td").forEach(element =>{
					element.style.filter = "brightness(1)";
				})
				selected = "";
			}
			else{
				// flg = true;
				selected = params.srcElement.parentElement.classList[1];
				document.querySelectorAll("td").forEach(element =>{
					element.style.filter = "brightness(1)";
				})
				document.querySelectorAll("td").forEach(element =>{
					element.style.filter = "brightness(0.35)";
				})
				var className = params.srcElement.parentElement.classList[1];
				document.querySelectorAll(`.${className}`).forEach(element => {
					element.style.filter = "brightness(1)"
				});
				switch(className){
					case "row01":
					document.querySelector(".header-row.row01").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row02":
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col06").style.filter = "brightness(1)";
					document.querySelector(".header-col.col12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row03":
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					break;
					case "row04":
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-col.col03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col04").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					break;
					case "row05":
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					break;
					case "row06":
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col06").style.filter = "brightness(1)";
					document.querySelector(".header-col.col09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row07":
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-col.col01").style.filter = "brightness(1)";
					document.querySelector(".header-col.col06").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col11").style.filter = "brightness(1)";
					document.querySelector(".header-col.col12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col16").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					document.querySelector(".header-col.col18").style.filter = "brightness(1)";
					break;
					case "row08":
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					document.querySelector(".header-col.col18").style.filter = "brightness(1)";
					break;
					case "row09":
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col04").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row10":
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col04").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col07").style.filter = "brightness(1)";
					document.querySelector(".header-col.col12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row11":
					document.querySelector(".header-row.row11").style.filter = "brightness(1)";
					document.querySelector(".header-col.col07").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col11").style.filter = "brightness(1)";
					document.querySelector(".header-col.col16").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row12":
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col05").style.filter = "brightness(1)";
					document.querySelector(".header-col.col07").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col11").style.filter = "brightness(1)";
					document.querySelector(".header-col.col14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col16").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					document.querySelector(".header-col.col18").style.filter = "brightness(1)";
					break;
					case "row13":
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col06").style.filter = "brightness(1)";
					document.querySelector(".header-col.col09").style.filter = "brightness(1)";
					document.querySelector(".header-col.col10").style.filter = "brightness(1)";
					document.querySelector(".header-col.col12").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
					case "row14":
					document.querySelector(".header-row.row14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col01").style.filter = "brightness(1)";
					document.querySelector(".header-col.col11").style.filter = "brightness(1)";
					document.querySelector(".header-col.col14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col16").style.filter = "brightness(1)";
					break;
					case "row15":
					document.querySelector(".header-row.row15").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					document.querySelector(".header-col.col18").style.filter = "brightness(1)";
					break;
					case "row16":
					document.querySelector(".header-row.row16").style.filter = "brightness(1)";
					document.querySelector(".header-col.col07").style.filter = "brightness(1)";
					document.querySelector(".header-col.col11").style.filter = "brightness(1)";
					document.querySelector(".header-col.col14").style.filter = "brightness(1)";
					document.querySelector(".header-col.col16").style.filter = "brightness(1)";
					document.querySelector(".header-col.col18").style.filter = "brightness(1)";
					break;
					case "row17":
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col03").style.filter = "brightness(1)";
					document.querySelector(".header-col.col04").style.filter = "brightness(1)";
					document.querySelector(".header-col.col06").style.filter = "brightness(1)";
					document.querySelector(".header-col.col13").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					document.querySelector(".header-col.col18").style.filter = "brightness(1)";
					break;
					case "row18":
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					document.querySelector(".header-col.col02").style.filter = "brightness(1)";
					document.querySelector(".header-col.col07").style.filter = "brightness(1)";
					document.querySelector(".header-col.col08").style.filter = "brightness(1)";
					document.querySelector(".header-col.col15").style.filter = "brightness(1)";
					document.querySelector(".header-col.col16").style.filter = "brightness(1)";
					document.querySelector(".header-col.col17").style.filter = "brightness(1)";
					break;
				}
			}
		})
	});
	// 防御側
	document.querySelectorAll(".header-col").forEach(element => {
		element.addEventListener("click",function(params) {
			var className = params.srcElement.parentElement.classList[1];
			if(selected === className){
				document.querySelectorAll("td").forEach(element =>{
					element.style.filter = "brightness(1)";
					selected = "";
				})
			}
			else{
				selected = className;
				document.querySelectorAll("td").forEach(element =>{
					element.style.filter = "brightness(1)";
				})
				document.querySelectorAll("td").forEach(element =>{
					element.style.filter = "brightness(0.35)";
				})
				
				document.querySelectorAll(`.${className}`).forEach(element => {
					element.style.filter = "brightness(1)";
				});
				switch(className){
					case "col01":
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row14").style.filter = "brightness(1)";
					break;
					case "col02":
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					break;
					case "col03":
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					break;
					case "col04":
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					break;
					case "col05":
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					break;
					case "col06":
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					break;
					case "col07":
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-row.row11").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row16").style.filter = "brightness(1)";
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					break;
					case "col08":
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row11").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					break;
					case "col09":
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					break;
					case "col10":
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					break;
					case "col11":
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row11").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row14").style.filter = "brightness(1)";
					document.querySelector(".header-row.row16").style.filter = "brightness(1)";
					break;
					case "col12":
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					break;
					case "col13":
					document.querySelector(".header-row.row01").style.filter = "brightness(1)";
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					break;
					case "col14":
					document.querySelector(".header-row.row01").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row14").style.filter = "brightness(1)";
					document.querySelector(".header-row.row16").style.filter = "brightness(1)";
					break;
					case "col15":
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row03").style.filter = "brightness(1)";
					document.querySelector(".header-row.row04").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row15").style.filter = "brightness(1)";
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					break;
					case "col16":
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row11").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row14").style.filter = "brightness(1)";
					document.querySelector(".header-row.row16").style.filter = "brightness(1)";
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					break;
					case "col17":
					document.querySelector(".header-row.row01").style.filter = "brightness(1)";
					document.querySelector(".header-row.row02").style.filter = "brightness(1)";
					document.querySelector(".header-row.row05").style.filter = "brightness(1)";
					document.querySelector(".header-row.row06").style.filter = "brightness(1)";
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row09").style.filter = "brightness(1)";
					document.querySelector(".header-row.row10").style.filter = "brightness(1)";
					document.querySelector(".header-row.row11").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row13").style.filter = "brightness(1)";
					document.querySelector(".header-row.row15").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					document.querySelector(".header-row.row18").style.filter = "brightness(1)";
					break;
					case "col18":
					document.querySelector(".header-row.row07").style.filter = "brightness(1)";
					document.querySelector(".header-row.row08").style.filter = "brightness(1)";
					document.querySelector(".header-row.row12").style.filter = "brightness(1)";
					document.querySelector(".header-row.row15").style.filter = "brightness(1)";
					document.querySelector(".header-row.row16").style.filter = "brightness(1)";
					document.querySelector(".header-row.row17").style.filter = "brightness(1)";
					break;
				}
			}
		})
	});
	
	image_selector1 = new ImageSelector(document.querySelector("#type-first"))
	image_selector2 = new ImageSelector(document.querySelector("#type-second"))
	
	image_selector1.setOnChange(onChangeSelectorFirst)
	image_selector2.setOnChange(onChangeSelectorSecond)
}

function onChangeSelectorFirst(){
	type_first = image_selector1.value;
	fetchText(type_first).then((result)=>{
		type_first_list = result;
		flg_first = true;
		if(flg_first && flg_second){
			calcEffect()
			// document.querySelector("#calcBtn").disabled = false;
		}
	})
}
function onChangeSelectorSecond(){
	type_second = image_selector2.value;
	fetchText(type_second).then((result)=>{
		type_second_list = result;
		flg_second = true;
		if(flg_first && flg_second){
			calcEffect()
			// document.querySelector("#calcBtn").disabled = false;
		}
	})
}

async function fetchText(index) {
	const data = await fetch(`typeList.json`);
	const res = await data.json();
	return res[index];
}

function calcEffect(){
	document.querySelectorAll(".calc-result-effect div").forEach(element => {
		element.innerHTML = "";
	});
	var effects = [];
	if(type_first == type_second){
		for(var i = 1;i<19;i++){
			var counter = i.toString().padStart(2, '0')
			effects[counter] = type_first_list[counter];
		}
	} else {
		for(var i = 1;i<19;i++){
			var counter = i.toString().padStart(2, '0')
			effects[counter] = type_first_list[counter] * type_second_list[counter];
		}
	}
	for(var i = 1;i<19;i++){
		var element = document.createElement("img");
		element.width = "32";
		element.height = "32";
		var counter = i.toString().padStart(2, '0')
		switch(effects[counter]){
			case 1:
			break;
			case 4:
			element.src = `./images/icon_type_${counter}.svg`;
			document.querySelector("#effect-super-effective div").appendChild(element)
			break;
			case 2:
			element.src = `./images/icon_type_${counter}.svg`;
			document.querySelector("#effect-effective div").appendChild(element)
			break;
			case 0.5:
			element.src = `./images/icon_type_${counter}.svg`;
			document.querySelector("#effect-not-effective div").appendChild(element)
			break;
			case 0.25:
			element.src = `./images/icon_type_${counter}.svg`;
			document.querySelector("#effect-very-not-effective div").appendChild(element)
			break;
			case 0:
			element.src = `./images/icon_type_${counter}.svg`;
			document.querySelector("#effect-doesnt-affect div").appendChild(element)
			break;
			
		}
	}
}

function inittabs(){
	document.querySelectorAll(".tabbtns").forEach(element => {
		element.addEventListener('click',function(){
			document.querySelectorAll(".tabbtns").forEach(element => {
				element.classList.remove("activetabbtn");
			});
			document.querySelectorAll(".tabs").forEach(element => {
				element.classList.remove("activetab");
			});
			document.querySelector(`#${element.dataset.tab}`).classList.add("activetab");
			element.classList.add("activetabbtn");
		})
	})
}