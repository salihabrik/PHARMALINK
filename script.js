// JavaScript code in script.js

const sisi = document.querySelector(".sisi");
const navMenu = document.querySelector(".nav-menu");

sisi.addEventListener("click", () => {
    sisi.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    sisi.classList.remove("active");
    navMenu.classList.remove("active");
}));

let searchInput = document.getElementById("searchInput");

searchInput.placeholder = "Enter medicine name!";
searchInput.style.width = "300px";
searchInput.style.height = "40px";

// Define toggleMenu globally
window.toggleMenu = function() {
    sisi.classList.toggle("active");
    navMenu.classList.toggle("inactive");
};

searchInput.addEventListener("click", () => {
    alert("Sorry there is drug");
});
