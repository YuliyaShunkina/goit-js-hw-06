const inputText = document.getElementById("validation-input");

const length = parseInt(inputText.getAttribute("data-length"));

inputText.addEventListener("blur", function () {
  if (inputText.value.length === length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});
