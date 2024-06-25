let accordAction = document.getElementsByClassName("accordionAction");
let showItem = document.getElementsByClassName("bodyFaq");
let btnImg = document.getElementsByClassName("btnFaq");
let button = document.getElementsByClassName("plusminus");

console.log(button);

for (let i = 0; i < accordAction.length; i++) {
  accordAction[i].addEventListener("click", function () {
    // CEK Apakah  item FAQ sudah memiliki class "showFaq" atau belum
    if (showItem[i].classList.contains("showFaq")) {
      hideFaq(i);
    } else if (!showItem[i].classList.contains("showFaq")) {
      showItem[i].classList.add("showFaq");
      button[i].classList.toggle("active");

      for (let j = 0; j < showItem.length; j++) {
        if (showItem[j].classList.contains("showFaq")) {
          if (showItem[j] === showItem[i]) {
            continue;
          }
          hideFaq(j);
          break;
        }
      }
    }
  });
}

function hideFaq(i) {
  showItem[i].classList.remove("showFaq");
  button[i].classList.toggle("active");
}
