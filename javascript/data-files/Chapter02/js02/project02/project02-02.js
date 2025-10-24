/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Dillon Anderson
      Date:   10/24/2025

      Filename: project02-02.js
 */
 
function verifyForm() {
      // a) b) c) grab the values 
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;

      // d) conditional operator using &&
      (name && email && phone)
            ? window.alert('Thank you!')
            : window.alert('Please fill in all fields');
}

// 4) event listener for the submit button
document.getElementById('submit').addEventListener('click', verifyForm);