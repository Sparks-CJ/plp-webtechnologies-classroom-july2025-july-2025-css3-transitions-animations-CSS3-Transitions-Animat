// --- Part 2: Functions Demonstrating Scope & Return ---

// Global variable
let globalCounter = 0;

// Function with parameters & return value
function multiply(a, b) {
  return a * b; // demonstrates return
}

// Function showing scope
function incrementCounter() {
  let localValue = 1; // local scope
  globalCounter += localValue;
  return globalCounter;
}

// --- Part 3: Combining CSS + JS ---

// Animate box on button click
const box = document.getElementById("box");
document.getElementById("animateBtn").addEventListener("click", () => {
  toggleBoxAnimation("scale", "green");
});

// Reusable function for box animation
function toggleBoxAnimation(type, color) {
  if (type === "scale") {
    box.style.transform = "scale(1.5)";
    box.style.background = color;
  } else {
    box.style.transform = "rotate(45deg)";
  }
}

// Modal logic
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Test functions in console
console.log("Multiply 4 * 5:", multiply(4, 5));       // 20
console.log("Counter after increment:", incrementCounter()); // 1
