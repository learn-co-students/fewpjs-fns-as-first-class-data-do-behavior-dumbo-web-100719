/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {

  let parsingTime = parseInt( timeString.split(':').join(''))
  let greeting
  if ( parsingTime < 1200){
    greeting = 'Good Morning';
  }
  else if ( parsingTime > 1200
    && parsingTime < 1700 ){
    greeting = 'Good Afternoon';
  }
  else {
    greeting = 'Good Evening';
  }
  return greeting
}

// function greetings(){
//   return greeting
// }

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}