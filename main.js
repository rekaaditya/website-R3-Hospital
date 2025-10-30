const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenuDropdown = document.getElementById("mobile-menu-dropdown");
mobileMenuButton.addEventListener("click", () => {
  mobileMenuDropdown.classList.toggle("active");
});
window.addEventListener("click", (e) => {
  if (
    !mobileMenuButton.contains(e.target) &&
    !mobileMenuDropdown.contains(e.target)
  ) {
    mobileMenuDropdown.classList.remove("active");
  }
});
