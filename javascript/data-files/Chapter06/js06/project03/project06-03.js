"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Dillon Anderson
      Date:   11/13/2025

      Filename: project06-03.js
*/

// Declare useShip variable / checkbox and event listener 
let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

// Function to copy shipping to billing
function copyShippingToBilling() {
   
      // shipping fields
      let firstnameShip = document.getElementById("firstnameShip");
      let lastnameShip = document.getElementById("lastnameShip");
      let address1Ship = document.getElementById("address1Ship");
      let address2Ship = document.getElementById("address2Ship");
      let cityShip = document.getElementById("cityShip");
      let countryShip = document.getElementById("countryShip");
      let codeShip = document.getElementById("codeShip");
      let stateShip = document.getElementById("stateShip");

      // billing fields
      let firstnameBill = document.getElementById("firstnameBill");
      let lastnameBill = document.getElementById("lastnameBill");
      let address1Bill = document.getElementById("address1Bill");
      let address2Bill = document.getElementById("address2Bill");
      let cityBill = document.getElementById("cityBill");
      let countryBill = document.getElementById("countryBill");
      let codeBill = document.getElementById("codeBill");
      let stateBill = document.getElementById("stateBill");

      // Only copy if checkbox is checked
      if (useShip.checked) {
         firstnameBill.value = firstnameShip.value;
         lastnameBill.value = lastnameShip.value;
         address1Bill.value = address1Ship.value;
         address2Bill.value = address2Ship.value;
         cityBill.value = cityShip.value;
         countryBill.value = countryShip.value;
         codeBill.value = codeShip.value;
         stateBill.value = stateShip.value;

         // Copy selected state option
         stateBill.selectedIndex = stateShip.selectedIndex;
      }
}

// formElements variable / fieldCount variable = length to formElements / declare errorBox with id="errorBox"
let formElements = document.querySelectorAll("input[type=text]");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

// for loop through each formElements node / apply event listener for validationError
for (let i = 0; i < fieldCount; i++) {
   formElements[i].addEventListener("invalid", showValidationError);
}

// Function to show validation error
function showValidationError(evt) {
      // Prevent default browser error message
      evt.preventDefault();
      // Display custom error message in errorBox
      errorBox.textContent = "Complete all highlighted fields.";
}
