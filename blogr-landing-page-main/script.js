"use strict";

//DECLARE VARIABEL --> Untuk mengambil class dan simpen  kedalam variable
let dropdownContainer = document.getElementsByClassName("dropDownNav");
let dropdownAction = document.getElementsByClassName("btnDropdown");
let btnIcon = document.getElementsByClassName("btnIcon");
let btnMenu = document.getElementById("btnMenu");
let menuMobile = document.getElementById("menuMobile");
let closeMenu = document.getElementById("closeMenuMobile");
let btnImg = document.getElementById("btnImg");

//ASSIGN  Event listener ke button dropdown --> looping sabanyak class dropdownCotaniner
for (let i = 0; i < dropdownAction.length; i++) {
  dropdownAction[i].addEventListener("click", function () {
    closeDropDown();
    dropdownContainer[i].classList.add("showDropdown");
    btnIcon[i].style.transform = " rotate(180deg)";
  });
}
// SHOW OR CLOSE MENU IN MOBILE
btnMenu.addEventListener("click", function () {
  if (!menuMobile.classList.contains("showMobileMenu")) {
    menuMobile.classList.add("showMobileMenu");
    changeImgIcon();
  } else {
    menuMobile.classList.remove("showMobileMenu");
    changeImgIcon();
  }
});

// Close the dropdown if the user clicks outside of the dropdown
window.onclick = function (event) {
  console.log(event);
  if (
    !event.target.matches(".btnDropdown") &&
    !event.target.matches(".btnIcon")
  ) {
    closeDropDown();
  }
};

// FUNCTION TO CHANGE IMAGE OF MENU IN MOBILE
function changeImgIcon() {
  if (menuMobile.classList.contains("showMobileMenu")) {
    btnImg.src = "images/icon-close.svg";
  } else {
    btnImg.src = "images/icon-hamburger.svg";
  }
}

//
function closeDropDown() {
  for (let i = 0; i < dropdownContainer.length; i++) {
    var openDropdown = dropdownContainer[i];
    if (openDropdown.classList.contains("showDropdown")) {
      btnIcon[i].style.transform = " rotate(0deg)";
      openDropdown.classList.remove("showDropdown");
    }
  }
}
