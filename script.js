flg = false;
selected = "";
function init(){
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
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col06").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col13").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col15").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col17").style.filter = "brightness(1)";
                    break;
                    case "row03":
                    document.querySelector(".header-row.row03").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col02").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col03").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col09").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col13").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col15").style.filter = "brightness(1)";
                    break;
                    case "row04":
                    document.querySelector(".header-row.row04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col02").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col03").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col08").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col09").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col10").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col13").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col15").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col17").style.filter = "brightness(1)";
                    break;
                    case "row05":
                    document.querySelector(".header-row.row05").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col03").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col05").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col09").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col10").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col15").style.filter = "brightness(1)";
                    break;
                    break;
                    case "row06":
                    document.querySelector(".header-row.row06").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col02").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col03").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col05").style.filter = "brightness(1)";
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
                    break;
                    case "row08":
                    document.querySelector(".header-row.row08").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col08").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col09").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col13").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col14").style.filter = "brightness(1)";
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
                    document.querySelector(".header-col.col04").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col07").style.filter = "brightness(1)";
                    document.querySelector(".header-col.col08").style.filter = "brightness(1)";
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
                    document.querySelector(".header-col.col07").style.filter = "brightness(1)";
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
                    document.querySelector(".header-col.col05").style.filter = "brightness(1)";
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
                
            }
        })
    });
}