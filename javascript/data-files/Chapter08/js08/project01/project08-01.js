"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Dillon Anderson
      Date:   11/18/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// 3. Constructor function for Timer objects
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// 4. runPause( ) method to start or pause the timer
timer.prototype.runPause = function(timer, minBox, secBox) {

      // 5. if the timer is running, pause it.
      if (timer.timeID) {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      } else {
            // start the timer 
            timer.timeID = window.setInterval(function() {
                  countdown(timer, minBox, secBox);
            }, 1000);
      }
};

// 6. countdown( ) function to update the timer display
function countdown(timer, minBox, secBox) {

      if (timer.seconds > 0) {
            timer.seconds--;
      }
      else if (timer.minutes > 0) {
            timer.minutes--;
            timer.seconds = 59;
      }
      else {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      }

      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// 7. Create a Timer object
let myTimer = new timer(minBox.value, secBox.value);

// 8. onchange event handler for minBox
minBox.onchange = function ( ) {
      myTimer.minutes = Number(minBox.value);
};

// onchange for secBox 
secBox.onchange = function ( ) {
      myTimer.seconds = Number(secBox.value);
};

// 9. onclick event handler for runPauseTimer button
runPauseTimer.onclick = function ( ) {
      myTimer.runPause(myTimer, minBox, secBox);
};