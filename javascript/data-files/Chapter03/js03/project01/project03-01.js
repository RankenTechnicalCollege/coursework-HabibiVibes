/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Dillon Anderson
      Date:   10/29/2025

      Filename: project03-01.js
*/


let menuItems = document.getElementsByClassName ("menuItem");

for (let i = 0; i < menuItems.length; i++) { 
      menuItems[i].addEventListener("change", calcTotal);
}

// Function to calculate the total order cost
function calcTotal() {
    let total = 0;

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            total += parseFloat(menuItems[i].value);
        }
    }
      document.getElementById("billTotal").textContent = formatCurrency(total);
}


 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }