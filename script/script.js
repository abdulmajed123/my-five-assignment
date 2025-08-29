// function getElement(id) {
//   const count = document.getElementsByClassName(id);
//   return count;
// }

// document.getElementById("call-button").addEventListener("click", function () {
//   alert(" 📞 National Emergency Number 999");
// });

let count = 0;
const display = document.getElementById("count");

function heartClick() {
  count++;
  display.innerText = count;
}

const heartButton = document.querySelectorAll(".heart-img");

for (let btn of heartButton) {
  btn.onclick = heartClick;
}

// btn.addEventListener("click", function () {
//   count++;
//   display.innerText = count;
// });

// document
//   .getElementsByClassName("call-button")
//   .addEventListener("click", function () {
//     alert("📞 National Emergency Number 999");
//   });
const coinsSpan = document.getElementById("coin");
let coins = parseInt(coinsSpan.innerText);

const callButton = document.querySelectorAll(".call-button");

for (const button of callButton) {
  button.addEventListener("click", function () {
    if (coins < 20) {
      alert("You don't have enough coins!");
      return;
    }
    const card = button.parentElement.parentElement; // বা button.closest(".card");

    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".subtitle").innerText;
    alert("📞 " + "calling " + title + " " + number);

    coins = coins - 20;
    coinsSpan.textContent = coins;
  });
}
