"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Dillon Anderson
      Date:   11/8/2025

      Filename: project05-02.js
*/

// variables 
document.addEventListener("DOMContentLoaded", () => {
const images = document.getElementsByTagName("img");
const photoBucket = document.getElementById("photo_bucket");
const photoList = document.getElementById("photo_list");

// for loop with onclick event to move images
for (let i = 0; i < images.length; i++) {
   images[i].onclick = function() {
      if (this.parentElement.id === "photo_bucket") {
            const newItem = document.createElement("li");   
            newItem.appendChild(this); 
            photoList.appendChild(newItem);
      } else {
            const oldItem = this.parentElement;
            const newItem = document.createElement("li");
            newItem.appendChild(this);
            photoBucket.appendChild(newItem);
            oldItem.parentElement.removeChild(oldItem);
      }
   };
}
});