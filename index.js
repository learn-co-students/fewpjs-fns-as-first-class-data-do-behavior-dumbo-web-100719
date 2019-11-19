/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  let time = parseInt(str)
  
  if(time < 12){
    return "Good Morning";
  } 
  else if(time > 17){
    return "Good Evening";
  }
  else
    return "Good Afternoon";
}

function displayMessage(str){
  let update = document.getElementById('greeting');
  update.innerText = str;
}
/* Write your implementation of displayMessage() */

/* Use like for like with parseInt when comparing integers
remember to use curly braces and parenthesis()*/
