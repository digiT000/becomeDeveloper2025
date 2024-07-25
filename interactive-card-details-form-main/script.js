"use strict";

const textNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardholderName");
const cardMonthExp = document.getElementById("expMonth");
const cardYearExp = document.getElementById("expYear");
const cardCvc = document.getElementById("cvcCard");
const success = document.querySelector(".successSection");
const form = document.querySelector(".formSection");

// DISPLAY ERROR
let errorMessage;
const cardHolderError = document.getElementById("cardHolderError");
const cardNumberError = document.getElementById("cardNumberError");
const cardDateError = document.getElementById("dateError");
const cvcError = document.getElementById("cvcError");

const cardNumberField = document.getElementById("cardNumberField");
const cardNameField = document.getElementById("cardHolderField");
const cardMonthField = document.getElementById("cardMonthField");
const cardYearField = document.getElementById("cardYearField");
const cardCvcField = document.getElementById("cardCvcField");

const confirmButton = document.getElementById("confirmButton");

// KEYBOARD LISTENER
cardNumberField.addEventListener("keyup", function () {
  textNumber.textContent = cardNumberField.value;

  if (cardNumberError.classList.contains("displayError")) {
    cardNumberError.classList.remove("displayError");
  }
});

cardNameField.addEventListener("keyup", function () {
  cardName.textContent = cardNameField.value;

  if (cardHolderError.classList.contains("displayError")) {
    cardHolderError.classList.remove("displayError");
  }
});

cardMonthField.addEventListener("keyup", function () {
  cardMonthExp.textContent = cardMonthField.value;
  if (cardMonthField.value !== "" && cardYearField.value !== "") {
    cardDateError.classList.remove("displayError");
  }
});

cardYearField.addEventListener("keyup", function () {
  cardYearExp.textContent = cardYearField.value;
  if (cardMonthField.value !== "" && cardYearField.value !== "") {
    cardDateError.classList.remove("displayError");
  }
});

cardCvcField.addEventListener("keyup", function () {
  cardCvc.textContent = cardCvcField.value;

  if (cvcError.classList.contains("displayError")) {
    cvcError.classList.remove("displayError");
  }
});

function validationForm() {
  event.preventDefault();
  let checkNumber = /^[0-9]+$/;

  let formValid = true;
  if (cardNameField.value === "") {
    cardHolderError.classList.add("displayError");
    formValid = false;
  }

  if (cardNumberField.value === "") {
    cardNumberError.textContent = "Can't be blank";
    cardNumberError.classList.add("displayError");
    formValid = false;
  } else if (!checkNumber.test(cardNumberField.value)) {
    cardNumberError.textContent = "Wrong format, numbers only";
    cardNumberError.classList.add("displayError");
    formValid = false;
  }

  if (cardMonthField.value === "" && cardYearField.value === 0) {
    cardHolderError.classList.add("displayError");
    formValid = false;
  }

  if (cardNameField.value === "") {
    cardDateError.classList.add("displayError");
    formValid = false;
  }

  if (cardCvcField.value === "") {
    cvcError.classList.add("displayError");
    formValid = false;
  }

  successConfirm(formValid);
}

function successConfirm(valid) {
  if (valid) {
    success.classList.remove("hideContainer");
    form.classList.add("hideContainer");
  }
}
