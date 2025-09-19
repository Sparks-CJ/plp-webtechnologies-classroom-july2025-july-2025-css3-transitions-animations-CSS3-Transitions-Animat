// Part 2: Functions, Parameters & Scope

// Function with parameter & return value
function calculateArea(width, height) {
  return width * height;
}

// Example usage (console log result)
console.log("Box area is: " + calculateArea(10, 5));

// Local vs Global Scope
let globalMessage = "I am global!";

function showMessage() {
  let localMessage = "I am local!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only inside
}
showMessage();

// Part 3: Combining CSS + JS

// Animate Box on Button Click
const magicBtn = document.getElementById("magicBtn");
const box = document.getElementById("box");

magicBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// Modal functionality
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
