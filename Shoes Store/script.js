// Side Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const menuClose = document.getElementById("menuClose");


menuToggle.addEventListener("click", () => {
    sideMenu.style.display = "flex"; // Show the side menu
});

menuClose.addEventListener("click", () => {
    sideMenu.style.display = "none"; // Hide the side menu
});

// Sort List Toggle
const sortToggle = document.getElementById("sortToggle");
const sortList = document.getElementById("sortList");

sortToggle.addEventListener("click", () => {
    // Toggle visibility
    if (sortList.style.display === "flex") {
        sortList.style.display = "none";
    } else {
        sortList.style.display = "flex";
    }
});

const heads = document.querySelectorAll('.head');

// Add a click event to each 'head'
heads.forEach((head) => {
    head.addEventListener('click', () => {
        // Toggle the display of the next sibling element (the list)
        const list = head.nextElementSibling;

        if (list.style.display === "flex" || list.style.display === "") {
            list.style.display = "none"; // Hide the list
        } else {
            list.style.display = "flex"; // Show the list
        }
    });
});

const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'product.detail.html'; // Navigate to the product detail page
    });
});