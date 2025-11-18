"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Dillon Anderson 
      Date:   11/18/2025

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/

// 3. create the cart object with an addItem() method
let cart = {
   items: [],

   addItem(foodItem) {
      this.items.push(foodItem);
   }
};

// 4. constructor function for Pizza objects
function Pizza() {
   this.size = "";
   this.crust = "";
   this.toppings = [];
}

// 5. constructor function for Topping objects
function Topping() {
   this.name = "";
   this.side = "";
}

// 6. addToCart() method to the Pizza prototype
Pizza.prototype.addToCart = function() {
   cart.items.push(this);
};

// 7. summarize() method added to the pizza prototype
Pizza.prototype.summarize = function() {
   let summary = "Pizza";

   // Add size and crust to the summary
   summary += this.size + " " + this.crust + " ";

   // loop through the toppings and add name and side to the summary
   for (let i = 0; i < this.toppings.length; i++) {
      let name = this.toppings[i].name;
      let side = this.toppings[i].side;
      summary += name + " (" + side + ") ";
   }
   return summary;
};









/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// 8. Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 

   // Create a new Pizza object
   let myPizza = new Pizza();
   myPizza.size = pizzaSizeBox.value;
   myPizza.crust = pizzaCrustBox.value;

   // add selected toppings as Topping objects to the pizza
   for (let i = 0; i < checkedToppings.length; i++) {
      let myTopping = new Topping();
      myTopping.name = checkedToppings[i].name;
      myTopping.side = checkedToppings[i].value;
      myPizza.toppings.push(myTopping);
   }

   return myPizza;
}    

// 9. Function to add the built pizza to the shopping cart
function updateCart() {

   // a. Build the pizza
   let myPizza = buildPizza();

   // b. Add the pizza to the cart
   cart.addItem(myPizza);

   // c. log the cart to the console 
   console.log(cart);

   // d. display the pizza summary in the cartBox
   let p = document.createElement("p");
   p.textContent = myPizza.summarize();
   cartBox.appendChild(p);

   // e. reset the pizza builder interface
   clearPizzaImage();
   clearToppings();
}  
