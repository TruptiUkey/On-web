let userScore = 0;
let compScore = 0;
let userinput = document.querySelector("input");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const uscore = document.querySelector("#user-score");
const cscore = document.querySelector("#comp-score");



const genCompChoice = () => {
    const option = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again!";
};

const showWinner = (userwin, userChoice,compChoice) => {
    if(userwin) {
        userScore++;
        uscore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#00916E";
    }else{
        compScore++;
        cscore.innerText = compScore;
        msg.innerText= `You loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#FA003F";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    //match draw
    if(userChoice == compChoice){
        drawGame();
        msg.style.backgroundColor = "#212227";

    }else{
        userwin = true;
        if(userChoice == "rock") {
            userwin = compChoice == "paper" ? false:true;
        }
        else if(userChoice == "paper") {
            userwin = compChoice == "scissors" ? false:true;
        }
        else{
            userwin = compChoice == "rock" ? false:true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});