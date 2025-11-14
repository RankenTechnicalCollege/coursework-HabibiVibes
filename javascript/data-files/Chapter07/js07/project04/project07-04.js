"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Dillon Anderson
      Date:   11/13/2025

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// 3. add onclick event handler for addButton
addButton.onclick = function() {
   // 3a. add name to end of array 
   customers.push(customerName.value);

   // 3b. update ordered list 
   generateCustomerList();

   // 3c. update status message
   status.textContent = customerName.value + " added to the end of the queue.";
};

// 4. searchButton onclick event handler
searchButton.onclick = function() {
   // 4a. find index of entered name
   let place = customers.indexOf(customerName.value) + 1;

   // 4b. report result 
   if (place === 0) {
      status.textContent = customerName.value + " is not found in the queue.";
   } else {
      status.textContent = customerName.value + 
                         " found in position " + place + " of the queue.";
   }
};

// 5. removeButton onclick event handler
removeButton.onclick = function() {
   // 5a. locate index of entered name
   let index = customers.indexOf(customerName.value);

   // 5b. remove if found, otherwise report not found
   if (index !== -1) {
      customers.splice(index, 1); // remove customer from array
      status.textContent = customerName.value + " removed from the queue.";
      generateCustomerList();      // update ordered list
   } else {
      status.textContent = customerName.value + " is not found in the queue.";
   }
};

// 6. topButton onclick event handler
topButton.onclick = function() {
   // 6a. remove first item from array
   let topCustomer = customers.shift();

   // 6b. update the status text 
   status.textContent = "top customer from the queue: " + topCustomer;

   // 6c. call generateCustomerList function to update the ordered list
   generateCustomerList();
};