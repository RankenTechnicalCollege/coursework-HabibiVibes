/*
Student Name: Dillon Anderson
Date: 9/23/2025
File Name: script.js
*/

//Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#ffffff";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#000000";
    }
}