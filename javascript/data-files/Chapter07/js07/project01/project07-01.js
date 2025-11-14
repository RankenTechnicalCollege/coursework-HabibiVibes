"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Dillon Anderson
      Date:   11/13/2025

      Filename: project07-01.js
*/

// Event listener for the form submit event
let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   // create regex variables 
   let regex1 = /[A-Z]/;      // Uppercase letter
   let regex2 = /\d/;         // Digit
   let regex3 = /[!$#%]/;     // Special character

   // if else statement 
   if (pwd.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
   }

   // no upper case letter 
   else if (!regex1.test(pwd) === false) {
      feedback.textContent = "Password must include an uppercase letter.";
   }

   // no number 
   else if (!regex2.test(pwd) === false) {
      feedback.textContent = "Password must include a number.";
   }

   // no special character
   else if (!regex3.test(pwd) === false) {
      feedback.textContent = "Password must include one of the following: !$#%";
   }

   // otherwise submit form 
   else {
      signupForm.submit();
   }
});
