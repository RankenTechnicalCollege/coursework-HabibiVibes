/*
Student Name: Dillon Anderson
Date: 09/22/2025
File Name: script.js
*/

// Hamburger Menu Function
function hamburger () {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}