const userName = document.getElementById("input");
const card = document.getElementById("card");

let store = [];

function add() {
  const text = userName.value;
  if (text) {
    if (!store.includes(text)) {
      store.push(text);
      userName.value = "";
      saveToLocal();
    }
  }
}

function play() {
  if (store.length) {
    const randomIndex = Math.floor(Math.random() * store.length);

    card.innerHTML = `
      <div class="coolinput">
        <h1><span>${store[randomIndex]} </span>will take today's class</h1>
      </div>
    
      <div class="buttonContainer">
        <button  class="addButton" onclick="back()" >Back</button>
      </div>
      `;
  }
}

function back() {
  window.location.href = "http://127.0.0.1:5500/";
}

function saveToLocal() {
  localStorage.setItem("name", JSON.stringify(store));
}

function removeToLocal() {
  localStorage.removeItem("name");
  store = [];
}

function getToLocal() {
  const data = localStorage.getItem("name");
  store = JSON.parse(data) ? JSON.parse(data) : [];
}
