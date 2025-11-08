"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: 
      Date:   

      Filename: project05-03.js
*/

// variables
const sourceDoc = document.getElementById("source_doc");
const toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

// for loop 
for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
      if (n.nodeName === heading) {
            const anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headingCount);

            n.insertBefore(anchor, n.firstChild);

            const listItem = document.createElement("li");
            const link = document.createElement("a");
            listItem.appendChild(link);
            link.textContent = n.textContent;
            link.href = "#doclink" + headingCount;
            toc.appendChild(listItem);
            headingCount += 1;
      }
}