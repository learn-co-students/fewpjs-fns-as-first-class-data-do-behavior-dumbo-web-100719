/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = str =>{
  let greeting;
  if(parseInt(str,10) < 12){
    greeting =  'Good Morning'
  } else if (parseInt(str, 10) > 17){
    greeting = 'Good Evening'
  }else{ 
    greeting = 'Good Afternoon'
  }
  return greeting
}

/* Write your implementation of displayMessage() */
const displayMessage = str =>{
  const greetingNode = document.getElementById('greeting')
  greetingNode.innerText = str
}

displayMessage('Hello')