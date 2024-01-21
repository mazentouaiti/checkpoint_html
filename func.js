// Function to toggle between light and dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Save the user's preference in localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

// Check user preference from localStorage
const storedDarkMode = localStorage.getItem("dark-mode");
if (storedDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

// Event listener for the mode toggle button
const modeToggleBtn = document.getElementById("modeToggleBtn"); // Replace with your actual button ID
if (modeToggleBtn) {
  modeToggleBtn.addEventListener("click", toggleDarkMode);
}
