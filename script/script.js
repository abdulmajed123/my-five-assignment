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

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const time = hours + ":" + minutes + ":" + seconds;

    const cart = document.getElementById("cart-Container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
      <div class="flex justify-between items-center p-3 bg-slate-50 mb-2 rounded-2xl">
        <div>
          <h2 class="font-bold">${title}</h2>
          <p class="font-bold">${number}</p>
        </div>
        <p class="font-semibold">${time}</p>
      </div>
    `;
    cart.appendChild(newCart);

    const clearHistoryBtn = document.getElementById("clear-Button");
    clearHistoryBtn.addEventListener("click", function () {
      newCart.innerHTML = "";
    });
  });
}

let copyCount = 0;
const copyCountDisplaye = document.getElementById("copy-count");
const copyButton = document.querySelectorAll(".copy-btn");

for (const copy of copyButton) {
  copy.addEventListener("click", function () {
    const copyNumber =
      this.parentElement.parentElement.querySelector(".card-number").innerText;
    navigator.clipboard.writeText(copyNumber).then(() => {
      alert(" number copied " + copyNumber);
    });
    copyCount++;
    copyCountDisplaye.innerText = copyCount;
  });
}
