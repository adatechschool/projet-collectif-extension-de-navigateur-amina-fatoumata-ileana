const memoryOfNotes = { stickyCount: 0 };
const yellow = document.querySelector("#btn-yellow");
const green = document.querySelector("#btn-green");
const pink = document.querySelector("#btn-pink");
const blue = document.querySelector("#btn-blue");

const btnAll = document.querySelector(".main-color");

console.log(btnAll);

yellow.addEventListener("click", function addElement() {
  // crée un nouvel élément div
  const newDiv = document.createElement("div");
  // et lui donne un peu de contenu
  const newContent = document.createElement("textarea");
  // ajoute le nœud texte au nouveau div créé
  newDiv.appendChild(newContent);

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
