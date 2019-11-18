/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string){
  if(string.split(":")[0]< 12){
    return "Good Morning"
  }else if(string.split(":")[0]> 17){
     return "Good Evening"
  }else
    return "Good Afternoon"
   
}
let message = document.getElementById("greeting")

function displayMessage(x){
  message.innerText = x
}