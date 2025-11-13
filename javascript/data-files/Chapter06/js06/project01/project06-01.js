"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Dillon Anderson
      Date:   11/13/2025

      Filename: project06-01.js
*/

// Declare variables
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// event listener for click event 
submitButton.addEventListener("click", function (e) {

      // Pattern to validate password complexity
      let pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

      // if pwd fails pattern patch - display message 
      if (!pwdPattern.test(pwd.value)) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
      
      // if passwords do not match - display message
      } else if (pwd.value !== pwd2.value) {
            pwd2.setCustomValidity("Your passwords do not match");

      // if both checks pass - clear messages
      } else {
            pwd.setCustomValidity("");
            pwd2.setCustomValidity("");
      }
});
