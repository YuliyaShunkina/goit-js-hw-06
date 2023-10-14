function createBoxes(amount) {
  const boxesDiv = document.querySelector("#boxes");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  const boxesDiv = document.querySelector("#boxes");
  boxesDiv.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const inputAmount = document.querySelector('input[type="number"]');
  createBoxes(inputAmount.valueAsNumber);
});

destroyButton.addEventListener("click", destroyBoxes);
