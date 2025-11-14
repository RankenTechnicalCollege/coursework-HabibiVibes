"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Dillon Anderson
      Date:   11/13/2025

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// run countdown ( ) function every 1000 milliseconds (1 second)
setInterval(countdown, 1000);

// countdown ( ) function 
function countdown() {

      // now variable set to current date and time
      let now = new Date();

      // display current date and time as a string
      currentTime.textContent = now.toLocaleString();

      // new year variable date "January 1, 2024" 
      let newYear = new Date("January 1, 2024");

      // get current year and add 1 to next year 
      let nextYear = now.getFullYear() + 1;

      // set year of newYear to nextYear
      newYear.setFullYear(nextYear);

      // days left until new year 
      let daysLeft = (newYear - now) / (1000 * 60 * 60 * 24);

      // hours left until new year 
      let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

      // minutes left until new year 
      let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

      // seconds left until new year 
      let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

      

      // display the following results in the web page clock 
      daysLeftBox.textContent = Math.floor(daysLeft);
      hrsLeftBox.textContent = Math.floor(hrsLeft);
      minsLeftBox.textContent = Math.floor(minsLeft);
      secsLeftBox.textContent = Math.floor(secsLeft);
}