function minfun(x) {
    if(x.value == "true") {
        x.nextElementSibling.style.height = "1000px";
        x.scr = "images/minus.png";
        x.value = "false";
    }
    else {
        x.nextElementSibling.style.height = "0px";
        x.scr = "images/plus.png";
        x.value = "true";
    }
}