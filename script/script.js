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

    // const callHistory = document.getElementById("cart-container");

    // const newCart = document.createElement("div");
    // newCart.innerHTML = `
    // <div class="flex justify-between items-center p-3 bg-slate-50">
    //       <div>
    //         <h2 class="font-bold">National Emergency Number</h2>
    //         <p class="font-bold">999</p>
    //       </div>
    //       <p class="font-bold">Time</p>
    //     </div>

    // `;

    // callHistory.append(newCart);

    // Current time
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const time = hours + ":" + minutes + ":" + seconds;

    // Create Call History entry
    const cart = document.getElementById("cart-Container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
      <div class="flex justify-between items-center p-3 bg-slate-50 mb-2 rounded-2xl">
        <div>
          <h2 class="font-bold">${title}</h2>
          <p class="font-bold">${number}</p>
        </div>
        <p class="font-bold">${time}</p>
      </div>
    `;
    cart.appendChild(newCart);

    const clearHistoryBtn = document.getElementById("clear-Button");
    clearHistoryBtn.addEventListener("click", function () {
      newCart.innerHTML = "";
    });
  });
}
