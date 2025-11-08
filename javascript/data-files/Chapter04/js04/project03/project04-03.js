/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Dillon Anderson
      Date:   11/7/2025

      Filename: project04-03.js
*/

"use strict";

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").textContent = MAX_REVIEW;

// Reference to elements in the web page
const wordCountBox = document.getElementById("countValue");
const warningBox = document.getElementById("warningBox");
const commentBox = document.getElementById("comment")

// Event listener for typing into the comment box
commentBox.addEventListener("keyup", updateCount);
updateCount();

   // Count the number of characters in the comment box
   commentText = document.getElementById("comment").value;
   charCount = countCharacters(commentText);

// Function to update the count with each keyup event
function updateCount() {
   try {
      if (charCount > MAX_REVIEW) {
         throw new Error ("You have exceeded the character count limit");
      }
      warningBox.innerHTML = "";
   } catch (error) {
      warningBox.innerHTML = error.message;
   }
   finally {
      wordCountBox.innerHTML = charCount;
   }
}
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 
   
