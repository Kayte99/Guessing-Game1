const input = document.querySelector("input"),
guess = document.querySelector(".guess"),
checkButton = document.querySelector("button"),
remainChances = document.querySelector(".chances");



input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

checkButton.addEventListener("click", () => {
    // Decrement the chance variable on every click
    chance--;
    // Get the value from the input field
    let inputValue = input.value;
    //check if input value is equal to the random number
    if(inputValue == randomNum) {
         //update guessed number, disable input, check button text and color.
      [guess.textContent, input.disabled] =["Congratulations", true];
      [checkButton.textContent, guess.style.color] = ["Replay", "green"]; 
       //check if input value is >random number and within 1-99 range.
      
     } else if(inputValue > randomNum && inputValue < 100){
      //update the guess text and remaining chances
      [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
      guess.style.color = "orange";
   //check if input is < random number and within 1-99 range.
    } else if (inputValue < randomNum && inputValue > 0) {
      // update the guessed number text and remaining chances
      [guess.textContent, remainChances.textContent] = ["Your guess is Low", chance];
      guess.style.color = "blue";
      //if the input value is not within the range of 1 to 99
    } else {
      // update the guessed number text, color and remaining chances
      [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
      guess.style.color = "#DE0611";
     }

     if (chance == 0) {
      [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
       [guess.textContent, guess.style] = ["You lost the game", "#DE0611"];
     }
     if (chance < 0) {
      window.location.reload();
     }
});
