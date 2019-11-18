/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let arr = string.split(":");
  let firstNum = parseInt(arr[0])
  if (firstNum < 12) {
    return "Good Morning";
  }

  else if (firstNum >= 12 && firstNum <= 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let greeting = document.querySelector("h1#greeting")
  greeting.innerText = string;
}