const fontSize = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = fontSize.value + "px";

fontSize.addEventListener("input", function () {
  text.style.fontSize = fontSize.value + "px";
});
