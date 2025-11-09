"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Dillon Anderson
      Date:   11/8/2025

      Filename: project05-04.js
*/
// Node list of phrases that are associated with footnotes
const phrases = document.querySelectorAll("article blockquote dfn");

// For Loop - all marked phrases 
for (let i = 0; i < phrases.length; i++) {
      phrases[i].onclick = function () {
      // <h1>
      const phrase = document.createElement("h1");
      phrase.textContent = this.textContent;
      
      // <p>
      const footnote = document.createElement("p");
      footnote.textContent = footnotes[i];
      footnote.style.fontStyle = "italic";
      footnote.style.fontSize = "1.2em";

      // Close Button 
      const closeButton = document.createElement("input");
      closeButton.type = "button";
      closeButton.value = "Close Footnote";
      // Popup Window
      const popup = window.open("", "Footnote", "width=300,height=200,top=100,left=100");
      if (!popup) return; 

      // popup body styles 
      const bs = popup.document.body.style;
      bs.backgroundColor = "ivory";
      bs.fontSize = "16px";
      bs.padding = "10px";

      // Append elements into the popup 
      popup.document.body.innerHTML = "";
      popup.document.body.appendChild(phrase);
      popup.document.body.appendChild(footnote);
      popup.document.body.appendChild(closeButton);

      // Close popup on click 
      closeButton.onclick = function () {
         popup.close();
      };
   };
}     




