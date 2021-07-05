/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString)
{ let timeI = parseInt(timeString)
  let greeting ;
  if (timeI < 12){
    greeting = "Good Morning"
  }
  else if(timeI < 17) {
    greeting = "Good Afternoon" 
  }
  else{
    greeting = "Good Evening"
  }
  return greeting
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */



function displayMessage(testContent)
{   let a = document.getElementById("greeting");
    a.innerText = testContent
}