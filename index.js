/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeInt = parseInt(timeString)
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

function displayMessage(str){
  document.getElementById("greeting").innerText = str;
}