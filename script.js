const animateBtn = document.getElementById("animateBtn");
const saveBtn = document.getElementById("saveTheme");
const loadBtn = document.getElementById("loadTheme");

// Animation Trigger
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate");
  setTimeout(() => animateBtn.classList.remove("animate"), 500);
});

// Store preference
saveBtn.addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  alert("Dark mode saved!");
});

// Load preference
loadBtn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

