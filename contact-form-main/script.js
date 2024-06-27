"use strict";

const inputCheck = document.getElementsByClassName("inputCheck");
const errorMessage = document.getElementsByClassName("errorMessage");
const submitButton = document.getElementById("submitForm");
// const firstName = document.getElementById("inputFirstName");
// const lastName = document.getElementById("inputLastName");
// const emailAddress = document.getElementById("inputEmail");
// const querySelectionList = document.getElementsByClassName("radioSelection");
// const generalValue = document.getElementById("general");
// const supportValue = document.getElementById("supportRequest");
// const message = document.getElementById("message");
// const checkConsent = document.getElementById("consent");

console.log(inputCheck);

console.log(errorMessage);

submitButton.addEventListener("click", function () {
  event.preventDefault();
  console.log("hit");
  for (let i = 0; i < inputCheck.length; i++) {
    console.log(inputCheck[i].name);
    if (inputCheck[i].classList.contains("fieldText")) {
      console.log("check", inputCheck[i].classList.contains("fieldText"));
      if (!inputCheck[i].value == "") {
        // if(inputCheck[i].name =='')
      } else {
        console.log("check 2", (inputCheck[i].value = ""));
        errorMessage[i].classList.add("showError");
      }
    }
  }
});
function checkForm() {}
