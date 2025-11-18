"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Dillon Anderson
      Date:   11/18/2025

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
      // 3a. Convert JSON text in fr.result into an object named staff
      let staff = JSON.parse(fr.result);

      // 3b. call makeStaffTable() using staff as the parameter
      makeStaffTable(staff);
   };
   
};

// 4. 
function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   
   // 5 create header row for first directory entry 
   for (let prop in staff.directory[0]) {
      // 5a. create a th element named headerCell
      let headerCell = document.createElement("th");
      // 5b. store prop as the text content of headerCell
      headerCell.textContent = prop;
      // 5c. append headerCell to headerRow
      headerRow.appendChild(headerCell);
   }

   // 5d. after the for...in loop, append headerRow to staffTable
   staffTable.appendChild(headerRow);

   // 6. create data rows for each directory entry
   for (let i = 0; i < staff.directory.length; i++) {
      // 6a. create a tr element node and store it in tr
      let tableRow = document.createElement("tr");

      // 6b. for in loop for the properties in staff.directory[i]
      for (let prop in staff.directory[i]) {
         // 6b i. create a td element named tableCell
         let tableCell = document.createElement("td");
         // 6b ii. put property value into tableCell 
         tableCell.textContent = staff.directory[i][prop];
         // 6b iii. append tableCell to tr
         tableRow.appendChild(tableCell);
      }
      // 6c. append tr to staffTable
      staffTable.appendChild(tableRow);
   }

   // 7. append completed table 
   containerBox.appendChild(staffTable);
}
