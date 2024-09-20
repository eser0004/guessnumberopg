let computerNumber = Math.trunc(Math.random()*20)+1 //Math.trunc returnere kun int delen af tal, og fjerner decimaler
let score = 20;
let highScore = 0;

const again = document.querySelector(".again")   //returnere første element, inde i documentet, med det specifikke selector. ".again".
const check = document.querySelector(".check")
const guess = document.querySelector(".guess")
const score1 = document.querySelector(".score")
const highScore1 = document.querySelector(".highscore")
const hiddenNumber = document.querySelector(".number")
const gameMessage = document.querySelector(".message")

// husk at tænke igennem hvilke konstanter der er behov for, og hvad der viser.


//viser beskeden
function message(message) {
     gameMessage.textContent = message;

}

//function som tager imod gættet og fremviser besked efter situation.
/*
tanken skal være , først laver man en function som kan tjekke på gættet,
så ville du gerne have at den skal vise besked alt efter om der er input, eller om bekseden er invalid.
Gætter personen correct skal det vises, gør det med nogle if/else statements.
Gså skal der også være besked for hvis du gætter for højt eller lavt.
så også hvis man gætter forkert for mange gange, og rammer 0.
Husk en genstart function.
 */
function checkGuess(){
    const guessedNumber = Number(guess.value)

    //no input or invalid
    if (!guessedNumber || guessedNumber < 1 || guessedNumber > 20){
        message("Please enter a valid number between 1 & 20")
    }else if (guessedNumber === computerNumber){
        message("Correct Guess!")  //korrekt gæt
        hiddenNumber.textContent = computerNumber //viser det korekte nummer
        hiddenNumber.style.backgroundColor = "#60b347"
        document.body.style.backgroundColor = "#60b347"
        if (score > highScore){
            highScore = score;
            highScore1.textContent = highScore //opdatere highscore
        }
    }else if (guessedNumber > computerNumber) {
        message("Incorrect guess, try lower!")
        score--; //fjerner 1 point hver gang
        score1.textContent = score; //opdatere scoren
    }else if (guessedNumber < computerNumber) {
        message("Incorrect guess, try higher!")
        score--;
        score1.textContent = score
    }else if(score <= 0){
        message("You lost! Try again :-).")
        score1.textContent = 0;
    }




}

function restart(){
    score = 20;
    computerNumber = Math.trunc(Math.random() * 20)+1 //generere nyt tilfældigt nummer
    hiddenNumber.textContent = "?" //gemmer tallet igen
    hiddenNumber.style.backgroundColor = "#eee"; // genstarter baggrund farven
    document.body.style.backgroundColor = "#222"; // genstarter body baggrunds farve
    score1.textContent = score; // genstarter scoren
    message("Start guessing...");
    guess.value = ""; // Clear the input field
}
check.addEventListener('click', checkGuess)
again.addEventListener('click', restart)
