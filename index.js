/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  var hour = time.split(':');
  hour = parseInt(hour[0])
  var greeting
  if(hour < 12){
    greeting = "Good Morning"
  }
  else if(hour >= 12 && hour <= 17){
    greeting = "Good Afternoon"
  }
  else {
    greeting = "Good Evening"
  }
  return greeting

}
/* Write your implementation of displayMessage() */

function displayMessage(mssg){

  const node = document.getElementById('greeting');
  node.innerText = mssg;
}
