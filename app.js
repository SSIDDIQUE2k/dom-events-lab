
/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
 const display =document.querySelector('.display')
 

/*-------------------------------- Variables --------------------------------*/
let userchoice1 = "" 
let userchoice2 = "" 
let operation =""
 
/*------------------------ Cached Element References ------------------------*/
 
 
/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
      //This is appending the clicked button text to the display
      let buttonText = event.target.innerText;
   display.textContent =  display.textContent + buttonText;
   console.log(typeof buttonText);
   console.log("1:",userchoice1, "2:",userchoice2, "3:",operation)
   console.log(display.textContent)
    
  if (buttonText === 'C') {
    display.textContent =   ""; 
    userchoice1 = ""; //resetting the userchoice1 to an empty string
    userchoice2 = ""; //resetting the userchoice2 to an empty string
    operation = ""; //resetting the operation to an empty string
  } else if (buttonText === '*' || buttonText === '+' || buttonText === '-' || buttonText === '/') {
    if( userchoice1 !== ""){
      operation = buttonText;
      display.textContent = userchoice1 +  " " + operation + " " + userchoice2;
    }
  } else if (buttonText === '=') {
    if(userchoice1 !== "" && userchoice2 !== "" && operation !== ""){
      let result;
      const num1 = parseInt(userchoice1);
      const num2 = parseInt(userchoice2);
      if (operation === "*") {
        result = num1 * num2;
      } else if (operation === "+") {
        result = num1 + num2;
      } else if (operation === "-") {
        result = num1 - num2;
      } else if (operation === "/") {
        result = num1 / num2;
      }
      display.textContent = result; 
      userchoice1 = result.toString();
      userchoice2 = "";
      operation = "";

    }
  
  } else {
    if (operation === "") {
      userchoice1 +=buttonText;
      display.textContent = userchoice1;
    } else  {
      userchoice2 += buttonText;
      display.textContent = userchoice2;
    }
  }
  }); 
});




  