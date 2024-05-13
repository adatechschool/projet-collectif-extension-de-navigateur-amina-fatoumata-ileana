function generatePostIt(color, initialContent = '', id = null, initialX = null, initialY = null) {
  let postIts = JSON.parse(localStorage.getItem('postIts')) || [];
  const newId = id || `postIt-${postIts.length + 1}`;
  
  //Création du post-it
  const newDiv = document.createElement("div");
  const newContent = document.createElement("textarea");
  newContent.value = initialContent;
  const closeButton = document.createElement("button");
  const saveButton = document.createElement("button");
  
  //Création de l'ID
  newDiv.setAttribute('id', newId);

  closeButton.addEventListener("click", function () {
    postIts = JSON.parse(localStorage.getItem('postIts')) || [];
    newDiv.remove();
    const filteredPostIts = postIts.filter(postIt => postIt.id !== newId);
        localStorage.setItem('postIts', JSON.stringify(filteredPostIts));
    });
  
    //css du bouton save
  saveButton.style.position = "absolute";
  saveButton.innerHTML = "Save";
  saveButton.style.color = "#636764";
  saveButton.style.height = "15px";
  saveButton.style.width = "30px";
  saveButton.style.top = "8px";
  saveButton.style.left = "8px";
  saveButton.style.backgroundColor = "#E9EBED";
  
  //css du bouton close
  closeButton.style.position = "absolute";
  closeButton.style.height = "15px";
  closeButton.style.width = "15px";
  closeButton.style.top = "8px";
  closeButton.style.right = "8px";
  closeButton.innerHTML = "x";
  closeButton.style.color = "grey";
  newDiv.appendChild(newContent);
  newDiv.appendChild(closeButton);
  newDiv.appendChild(saveButton);
  document.body.appendChild(newDiv);
  
  //background et position du post it
  newContent.style.backgroundColor = color;
  newDiv.style.position = "absolute";
  newDiv.style.pointerEvents = "auto";
  
  // Générer des positions aléatoires
  const posX = initialX || `${Math.random() * (window.innerWidth - 200)}px`;
  const posY = initialY || `${Math.random() * (window.innerHeight - 200)}px`;
    newDiv.style.left = posX;
    newDiv.style.top = posY;
  newDiv.style.zIndex = "1000";
  newContent.style.color = "black";
  newContent.style.height = "200px";
  newContent.style.width = "200px";
  newContent.style.padding = "10%";
  
  // Ajouter des propriétés pour le glisser-déposer
  newDiv.isDragging = false;
  newDiv.initialX = 0;
  newDiv.initialY = 0;
  
  // Enregistrement dans le local storage immédiat
  
  // localStorage.setItem('postIts', JSON.stringify(postIts));
  
  // Enregistrement grâce au bouton save des modifications
  saveButton.addEventListener("click", function() {
  const index = postIts.findIndex(postIt => postIt.id === newId);
  
  
  if (index !== -1) {
      postIts[index].content = newContent.value;
      postIts[index].color = color;
  } else {
    postIts.push({
      id: newId,
      content: newContent.value,
      x: posX,
      y: posY,
      color: color
    });
    
    
  }
  localStorage.setItem('postIts', JSON.stringify(postIts));
  });
  
  // Chargement des post-it enregsitrés précédemment
  
  return newDiv;
}

window.onload = function() {
  const postIts = JSON.parse(localStorage.getItem('postIts')) || [];
  postIts.forEach(postIt => {
      generatePostIt(postIt.color, postIt.content, postIt.id, postIt.x, postIt.y);
  });
};

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
    //actualiser la position
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

