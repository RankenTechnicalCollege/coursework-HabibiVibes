/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Dillon Anderson
      Date:   10/24/2025

      Filename: project02-04.js
 */
 
// Declare menu items constants 
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const TAX_RATE = 0.07;

// Run calcTotal() whenever a menu item is clicked
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

function calcTotal() {
   // a) Start with total cost at 0 
   let cost = 0;

   // b) check status of each checkbox 
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   // c) Add prices if boxes are checked 
   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   // d) Show subtotal (before tax)
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   // e) Calculate sales tax
   let tax = cost * TAX_RATE;

   // f) Show tax amount 
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   // g) Calculate total (subtotal + tax)
   let totalCost = cost + tax;

   // h) Show total bill 
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
