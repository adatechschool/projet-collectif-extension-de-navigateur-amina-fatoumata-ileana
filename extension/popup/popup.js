// let isDragging = false;
// let initialX = 0;
// let initialY = 0;

// function generatePostIt(color) {
//   const newDiv = document.createElement("div");
//   const newContent = document.createElement("textarea");
//   const checkbox = document.createElement("button");
//   checkbox.addEventListener("click", function () {
//     newDiv.remove();
//   });

//   checkbox.style.position = "absolute";
//   checkbox.style.height = "15px";
//   checkbox.style.width = "15px";
//   checkbox.style.top = "8px";
//   checkbox.style.right = "8px";
//   checkbox.innerHTML = "x";
//   checkbox.style.color = "grey";
//   newDiv.appendChild(newContent);
//   newDiv.appendChild(checkbox);
//   document.body.appendChild(newDiv);
//   newContent.style.backgroundColor = color;
//   newDiv.style.position = "absolute";
//   newDiv.style.pointerEvents = "auto";
//   newDiv.style.left = "50px";
//   newDiv.style.top = "50px";
//   newDiv.style.zIndex = "1000";
//   newContent.style.color = "black";
//   newContent.style.height = "200px";
//   newContent.style.width = "200px";
//   newContent.style.padding = "10%";

//   return newDiv;
// }

// function movePostIt(newDiv) {
//   newDiv.addEventListener("mousedown", function (event) {
//     isDragging = true;
//     initialX = event.clientX - parseInt(newDiv.style.left, 10);
//     initialY = event.clientY - parseInt(newDiv.style.top, 10);
//   });

//   document.addEventListener("mousemove", function (event) {
//     if (isDragging) {
//       newDiv.style.left = event.clientX - initialX + "px";
//       newDiv.style.top = event.clientY - initialY + "px";
//     }
//   });

//   document.addEventListener("mouseup", function () {
//     isDragging = false;
//   });
// }

// async function activeTAB(color) {
//   // Obtenir l'onglet actif
//   var [activeTab] = await chrome.tabs.query({
//     active: true,
//     currentWindow: true,
//   });

//   // Vérifier si un onglet actif a été trouvé
//   if (activeTab) {
//     console.log("hello");
//     // Exécuter le script uniquement sur l'onglet actif
//     chrome.scripting.executeScript({
//       target: { tabId: activeTab.id },
//       func: callFunctions,
//       args: [color],
//     });
//   }
//   console.log("coucou");
// }

// function callFunctions(color) {
//   console.log("hola");
//   let divPostIt = generatePostIt(color);
//   movePostIt(divPostIt);
// }

// document.querySelector(".btn-yellow").addEventListener("click", async () => {
//   await activeTAB("#E7E496");
// });

// document.querySelector(".btn-green").addEventListener("click", async () => {
//   await activeTAB("#b1d778");
// });

// document.querySelector(".btn-pink").addEventListener("click", async () => {
//   await activeTAB("#FDDEF4");
// });

// document.querySelector(".btn-blue").addEventListener("click", async () => {
//   await activeTAB("#CFF1F8");
// });

function generatePostIt(color) {
  const newDiv = document.createElement("div");
  const newContent = document.createElement("textarea");
  const checkbox = document.createElement("button");
  checkbox.addEventListener("click", function () {
    newDiv.remove();
  });

  checkbox.style.position = "absolute";
  checkbox.style.height = "15px";
  checkbox.style.width = "15px";
  checkbox.style.top = "8px";
  checkbox.style.right = "8px";
  checkbox.innerHTML = "x";
  checkbox.style.color = "grey";
  newDiv.appendChild(newContent);
  newDiv.appendChild(checkbox);
  document.body.appendChild(newDiv);
  newContent.style.backgroundColor = color;
  newDiv.style.position = "absolute";
  newDiv.style.pointerEvents = "auto";

  // Générer des positions aléatoires
  newDiv.style.left = Math.random() * (window.innerWidth - 200) + "px";
  newDiv.style.top = Math.random() * (window.innerHeight - 200) + "px";

  newDiv.style.zIndex = "1000";
  newContent.style.color = "black";
  newContent.style.height = "200px";
  newContent.style.width = "200px";
  newContent.style.padding = "10%";

  // Ajouter des propriétés pour le glisser-déposer
  newDiv.isDragging = false;
  newDiv.initialX = 0;
  newDiv.initialY = 0;

  return newDiv;
}

function movePostIt(newDiv) {
  newDiv.addEventListener("mousedown", function (event) {
    newDiv.isDragging = true;
    newDiv.initialX = event.clientX - parseInt(newDiv.style.left, 10);
    newDiv.initialY = event.clientY - parseInt(newDiv.style.top, 10);
  });

  document.addEventListener("mousemove", function (event) {
    if (newDiv.isDragging) {
      newDiv.style.left = event.clientX - newDiv.initialX + "px";
      newDiv.style.top = event.clientY - newDiv.initialY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    newDiv.isDragging = false;
  });
}

async function activeTAB(color) {
  // Obtenir l'onglet actif
  var [activeTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  // Vérifier si un onglet actif a été trouvé
  if (activeTab) {
    console.log("hello");
    // Exécuter le script uniquement sur l'onglet actif
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: callFunctions,
      args: [color],
    });
  }
  console.log("coucou");
}

function callFunctions(color) {
  console.log("hola");
  let divPostIt = generatePostIt(color);
  movePostIt(divPostIt);
}

document.querySelector(".btn-yellow").addEventListener("click", async () => {
  await activeTAB("#E7E496");
});

document.querySelector(".btn-green").addEventListener("click", async () => {
  await activeTAB("#b1d778");
});

document.querySelector(".btn-pink").addEventListener("click", async () => {
  await activeTAB("#FDDEF4");
});

document.querySelector(".btn-blue").addEventListener("click", async () => {
  await activeTAB("#CFF1F8");
});
