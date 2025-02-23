
const navToggle = document.querySelector('.menu_item');
const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    // Toggle visibility
    if (navToggle.style.display === "flex") {
        navToggle.style.display = "none";
    } else {
        navToggle.style.display = "flex";
    }
});