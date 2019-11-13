function minfun(x) {
    if(x.value == "true") {
        x.nextElementSibling.style.height = "1000px";
        x.src = "images/minus.png";
        x.value = "false";
    }
    else {
        x.nextElementSibling.style.height = "0px";
        x.src = "images/plus.png";
        x.value = "true";
    }
}