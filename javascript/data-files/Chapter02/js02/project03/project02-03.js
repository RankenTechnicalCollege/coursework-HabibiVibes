/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Dillon Anderson
      Date:   10/24/2025

      Filename: project02-03.js
 */

document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're Hovering over the Square";
};

document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're Hovering over the Triangle";
};

document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're Hovering over the Circle";
};