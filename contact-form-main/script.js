"use strict";

//const inputCheck = document.getElementsByClassName("inputCheck");
const submitButton = document.getElementById("submitForm");
const firstName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const emailAddress = document.getElementById("inputEmail");
const querySelectionList = document.getElementsByClassName("radioSelection");
const generalValue = document.getElementById("general");
const supportValue = document.getElementById("supportRequest");
const message = document.getElementById("message");
const checkConsent = document.getElementById("consent");
let errorMessage;
const toastMessage = document.getElementById("toastSuccess");

submitButton.addEventListener("click", submitData);

function submitData() {
  if (checkValidation()) {
    setTimeout(function () {
      toastMessage.classList.add("showToast");
    }, 0.3);

    setTimeout(function () {
      toastMessage.classList.remove("showToast");
      clearInput();
    }, 3000);
  }
}

function checkValidation() {
  event.preventDefault();

  // const validEmailRegex = new RegExp(
  //   /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  // );

  let isValid = true;

  const validEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (firstName.value == "") {
    showError(firstName);
    isValid = false;
  } else {
    hideError(firstName);
  }

  if (lastName.value == "") {
    showError(lastName);
    isValid = false;
  } else {
    hideError(lastName);
  }
  if (emailAddress.value == "") {
    showError(emailAddress);
  } else {
    hideError(emailAddress);
  }

  if (emailAddress.value == "" || !validEmailRegex.test(emailAddress.value)) {
    showError(emailAddress);
    isValid = false;
  } else {
    hideError(emailAddress);
  }
  if (!generalValue.checked && !supportValue.checked) {
    showError(generalValue);
    isValid = false;
  } else {
    hideError(generalValue);
  }

  if (message.value == "") {
    showError(message);
    isValid = false;
  } else {
    hideError(message);
  }

  if (!checkConsent.checked) {
    showError(checkConsent);
    isValid = false;
  } else {
    hideError(checkConsent);
  }
  console.log(isValid);
  return isValid;
}

function clearInput() {
  firstName.value = "";
  lastName.value = "";
  emailAddress.value = "";
  generalValue.checked = false;
  supportValue.checked = false;
  message.value = "";
  checkConsent.checked = false;
}

function showError(scope) {
  errorMessage = document
    .getElementById(`${scope.name}Error`)
    .classList.add("showError");
}

function hideError(scope) {
  errorMessage = document
    .getElementById(`${scope.name}Error`)
    .classList.remove("showError");
}
