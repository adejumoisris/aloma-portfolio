var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");


function open(tabName){
    for(tabLink of tabLinks){
        tabLinks.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContents.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabName).classList.add("active-tab");

}


var sideMenu = document.getElementById("sidemenu")

function openMenu(){
    sideMenu.style.right = "0";

}

function closeMenu(){
    sideMenu.style.right = "-200px";

}
