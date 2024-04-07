'use strict'

// get button who gets 'btn' class
const swithcher = document.querySelector(".btn");
// add an eventlistener to this button to check if the user clicks the button
swithcher.addEventListener('click', function () {
  // the following two lines do this:
  // check if 'light-theme' exists or not, if exists, remove it. if not exists, add it.
  document.body.classList.toggle('light-theme');
  // check if 'dark-theme' exists or not, if exists, remove it. if not exists, add it.
  document.body.classList.toggle('dark-theme');


  // get the body class
  const className = document.body.className;
  // according to the current class name of the document body, change the text of the button text
  // this ==> this button who is being listening to
  this.textContent = className == "light-theme" ? "Dark" : "Light";
})