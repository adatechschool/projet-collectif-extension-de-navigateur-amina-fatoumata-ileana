function callFunctions(color) {
    console.log("hola");
    let divPostIt = generatePostIt(color);
    movePostIt(divPostIt);
  }
  document.querySelector(".btn-yellow").addEventListener("click", async () => {
    await activeTAB("#E7E496");
  });
  document.querySelector(".btn-green").addEventListener("click", async () => {
    await activeTAB("#B1D778");
  });
  document.querySelector(".btn-pink").addEventListener("click", async () => {
    await activeTAB("#FDDEF4");
  });
  document.querySelector(".btn-blue").addEventListener("click", async () => {
    await activeTAB("#CFF1F8");
  });