"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Dillon Anderson
      Date:   11/13/2025

      Filename: project06-02.js
*/

// run the function after the page loads
window.addEventListener("load", function () {

      // get <select> elements inside the form with an id="govLinks"
      let allSelect = document.querySelectorAll("form#govLinks select");

      // loop through each <select> element list
      for (let i = 0; i < allSelect.length; i++) {

            // add onchange event listener 
            allSelect[i].addEventListener("change", function (evt) {

                  // retrieve the selected option's value
                  let linkURL = evt.target.value;

                  // window.open ( ) method to open the link in a new tab
                  let newWin = window.open(linkURL);
            });
      }
});
