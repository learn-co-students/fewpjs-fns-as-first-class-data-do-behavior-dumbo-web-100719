/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let splitTime = timeString.split(":")
  let hourString = splitTime[0]
  let hour = parseInt(hourString)
  if (hour < 12 ) {
    return "Good Morning"
  } else if (hour <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(message){
 document.getElementById('greeting').innerText = message
}

/* Write your implementation of displayMessage() */
