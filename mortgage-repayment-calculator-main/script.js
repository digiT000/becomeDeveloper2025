"use strict";
const inpField = document.getElementsByClassName("inpField");
const valueMortgage = document.getElementById("inpMortgage");
const valueTerms = document.getElementById("inpTerms");
const valueIntertest = document.getElementById("inpInterest");
const valueType = document.getElementsByClassName("inpType");
const uiEmptyState = document.getElementById("emptyState");
const uiFillState = document.getElementById("filledState");
const submitForm = document.getElementById("submitForm");
const resetButton = document.getElementById("resetForm");
const inpErrorMortgage = document.getElementById("inpMortgageError");
const inpErrorTerms = document.getElementById("inpTermsError");
const inpErrorInterest = document.getElementById("inpInterestError");
const inpErrorType = document.getElementById("inpTypeError");
const elValue_1 = document.getElementById("resValue-1");
const elValue_2 = document.getElementById("resValue-2");

// FORMATER NUMERIC
const formatter = new Intl.NumberFormat("en-US");

submitForm.addEventListener("click", function (event) {
  event.preventDefault();

  //   DECLARE VARAIBLE
  const mortgage = Number(valueMortgage.value);
  const term = Number(valueTerms.value);
  const termInMonth = term * 12;
  const interestRate = Number(valueIntertest.value / 100);
  const interestRateInMonth = Number((interestRate / 12).toFixed(6));

  if (validationCheck()) {
    if (valueType[0].checked) {
      // SET VALUE TO FRONT END
      const tempMonthlyRepayment = totalMonthlyPayment(
        mortgage,
        interestRateInMonth,
        termInMonth
      );
      const tempTotalRepay = totalRepay(tempMonthlyRepayment);

      elValue_1.textContent = formatter.format(tempMonthlyRepayment);
      elValue_2.textContent = formatter.format(tempTotalRepay);

      showResult();
    } else {
      const interestMonlyPayment = mortgage * interestRateInMonth;
      elValue_1.textContent = formatter.format(mortgage * interestRateInMonth);
      elValue_2.textContent = formatter.format(
        interestMonlyPayment * termInMonth
      );
      showResult();
    }
  } else {
    return false;
  }
});

// VALIDATION INPUT
function validationCheck() {
  let isValid = true;

  if (valueMortgage.value === "") {
    inpErrorMortgage.classList.add("showTextError");
    isValid = false;
  }

  if (valueTerms.value == "") {
    inpErrorTerms.classList.add("showTextError");
    isValid = false;
  }

  if (valueIntertest.value == "") {
    inpErrorInterest.classList.add("showTextError");
    isValid = false;
  }
  if (!valueType[0].checked && !valueType[1].checked) {
    inpErrorType.classList.add("showTextError");
    isValid = false;
  }

  return isValid;
}

function totalMonthlyPayment(mortgage, interestRateInMonth, termInMonth) {
  let totalMonthlyPayment;
  const tempCalc =
    (interestRateInMonth * (1 + interestRateInMonth) ** termInMonth) /
    ((1 + interestRateInMonth) ** termInMonth - 1);

  totalMonthlyPayment = mortgage * tempCalc;
  return Number(totalMonthlyPayment.toFixed(2));
}

function totalRepay(MonthlyRepayment) {
  return MonthlyRepayment * (valueTerms.value * 12);
}

function showResult() {
  uiEmptyState.classList.add("hideResult");
  uiFillState.classList.remove("hideResult");
}

// RESET BUTTON
resetButton.addEventListener("click", function () {
  uiEmptyState.classList.remove("hideResult");
  uiFillState.classList.add("hideResult");

  inpErrorMortgage.classList.remove("showTextError");
  inpErrorTerms.classList.remove("showTextError");
  inpErrorInterest.classList.remove("showTextError");
  inpErrorType.classList.remove("showTextError");
});

// HIDE ERROR WHEN TYPING

console.log(inpField);

for (let i = 0; i < inpField.length; i++) {
  inpField[i].addEventListener("focus", function (event) {
    let inputName = event.target.name;
    inpField[i].addEventListener("keyup", function (event) {
      document
        .getElementById(`${inputName}Error`)
        .classList.remove("showTextError");
    });
  });
}
