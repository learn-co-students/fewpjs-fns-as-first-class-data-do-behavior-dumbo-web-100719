/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeInt = parseInt(timeString, 10)
  let greeting;
  if (timeInt < 12){
    greeting = ("Good Morning")}
    else if ( timeInt < 12 || timeInt > 17){
      greeting = ("Good Evening")}
      else{
        greeting = ("Good Afternoon")}
        return greeting
      }

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  document.getElementById("greeting").innerText=(str)
}