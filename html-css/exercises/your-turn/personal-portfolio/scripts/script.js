/*
Student Name: Dillon Anderson
Date: 09/23/2025
File Name: script.js
*/

// Hamburger Function for Mobile Navigation
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#fff";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#000";
    }
}