const memoryOfNotes = { stickyCount: 0 };
const yellow = document.querySelector("#btn-yellow");
console.log(yellow);
const green = document.querySelector("#btn-green");
const pink = document.querySelector("#btn-pink");
const blue = document.querySelector("#btn-blue");
const btnAll = document.querySelector(".main-color");
const newDiv = document.createElement("div");
const newContent = document.createElement("textarea");

console.log(btnAll);

yellow.addEventListener("click", function () {

  chrome.tabs.query({
    active: true, 
    currentWindow: true
  }, 
  function(tabs) {
    console.log('click on yellow btn')
    chrome.tabs.sendMessage(tabs[0].id, { action: "createNote" });
  });
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "createNote") {
      console.log('create note');
      
      newDiv.appendChild(newContent);

      document.body.insertBefore(newDiv);

      newContent.style.backgroundColor = "#FDFDDE"
    }
  });
  
  
  
  
  
  
  
  // // crée un nouvel élément div
  // const newDiv = document.createElement("div");
  // // et lui donne un peu de contenu
  // const newContent = document.createElement("textarea");
  // // ajoute le nœud texte au nouveau div créé
  // newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  const currentDiv = document.getElementById("body");
  document.body.insertBefore(newDiv, currentDiv);
  newContent.style.backgroundColor = "#FDFDDE";
});

green.addEventListener("click", function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createElement("textarea");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("body");
  document.body.insertBefore(newDiv, currentDiv);
  newContent.style.backgroundColor = "#D5F494";
});

pink.addEventListener("click", function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createElement("textarea");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("body");
  document.body.insertBefore(newDiv, currentDiv);
  newContent.style.backgroundColor = "#FDDEF4";
});

blue.addEventListener("click", function addElement() {
  const newDiv = document.createElement("div");
  const newContent = document.createElement("textarea");
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("body");
  document.body.insertBefore(newDiv, currentDiv);
  newContent.style.backgroundColor = "#CFF1F8";
});