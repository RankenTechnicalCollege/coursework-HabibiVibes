"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Dillon Anderson
      Date:   11/8/2025

      Filename: project05-01.js
*/

let timerId;
let timeLeft = 30;
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// 4. Quotation list 
const questionList = document.querySelectorAll("div#quiz input");

// 5. Add click to start quiz button
const startQuiz = document.getElementById("startquiz");
const quizClock = document.getElementById("quizclock");
const overlay = document.getElementById("overlay");

startQuiz.onclick = function() {
   overlay.className = "showquiz";
   countdown( ); // start immediately
   timerId = setInterval(countdown, 1000);
};

// 6. Countdown function
function countdown( ) {
   if (timeLeft === 0) {
      clearInterval(timerId);
      let totalCorrect = checkAnswers( );

      if (totalCorrect === correctAnswers.length) {
         alert("Congratulations! You got 100%!");
      } else {
         alert(`You got ${totalCorrect} out of ${correctAnswers.length} correct.`);
      }

      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}






















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

