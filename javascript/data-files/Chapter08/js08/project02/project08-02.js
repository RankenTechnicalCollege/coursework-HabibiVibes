"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Dillon Anderson
      Date:   11/18/2025

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

// 3. Object literal for the container box 
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
};

// 4. Constructor function for the ball class 
function ball(size) {
   this.radius = size;
   this.xPos = 0;
   this.yPos = 0;
   this.xVelocity = 0;
   this.yVelocity = 0;
}

// 5. moveWithin() method for ball objects class
ball.prototype.moveWithin = function(container) {

   // a. top/left ball position
   let ballTop = this.yPos;
   let ballLeft = this.xPos;

   // b. bottom/right ball position
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius;

   // c. bounce vertically 
   if (ballTop < 0 || ballBottom > container.height) {
      container.yPos += this.yVelocity;
      this.yVelocity = -this.yVelocity;
   }

   // d. bounce horizontally
   if (ballLeft < 0 || ballRight > container.width) {
      container.xPos += this.xVelocity;
      this.xVelocity = -this.xVelocity;
   }

   // e. move the ball within the container 
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
};

/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage); 
   
   // 7a. Create an instance of the ball object 
   let newBall = new ball(BALL_RADIUS);
   
   // 7b. center the ball in the container
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS)/2;
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS)/2;

   // 7c. assign random velocities to the ball
   newBall.yVelocity = rand(-10, 10);
   newBall.xVelocity = rand(-10, 10);

   // 8. animate the motion of the ball 
   window.setInterval(function() {

      // a. move the ball within the container box
      newBall.moveWithin(box);

      // b. move the ball image to match the ball object position
      ballImage.style.left = newBall.xPos + "px";
      ballImage.style.top = newBall.yPos + "px";

      // c. shake the container 
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";
   }, 25);
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}