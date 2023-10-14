const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterElement = document.querySelector("#value");
let counterValue = 0;
function updateCounter() {
  counterElement.textContent = counterValue;
}
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});

// Ініціалізуємо початковий інтерфейс
updateCounter();
