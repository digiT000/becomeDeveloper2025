"use strict";

//DECLARE VARIABEL --> Untuk mengambil class dan simpen  kedalam variable
let dropdownContainer = document.getElementsByClassName("dropDownNav");
let dropdownAction = document.getElementsByClassName("btnDropdown");
let btnIcon = document.getElementsByClassName("btnIcon");

//ASSIGN  Event listener ke button dropdown --> looping sabanyak class dropdownCotaniner
for (let i = 0; i < dropdownAction.length; i++) {
  dropdownAction[i].addEventListener("click", function () {
    closeDropDown();
    dropdownContainer[i].classList.add("showDropdown");
    btnIcon[i].style.transform = " rotate(180deg)";
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  console.log(event);
  if (
    !event.target.matches(".btnDropdown") &&
    !event.target.matches(".btnIcon")
  ) {
    closeDropDown();
  }
};

function closeDropDown() {
  for (let i = 0; i < dropdownContainer.length; i++) {
    var openDropdown = dropdownContainer[i];
    if (openDropdown.classList.contains("showDropdown")) {
      btnIcon[i].style.transform = " rotate(0deg)";
      openDropdown.classList.remove("showDropdown");
    }
  }
}
