
let result ="";
let computerMove = '';

let score = {
    Lose: 0,
    Win: 0,
    Tie: 0
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
    score = savedScore;
}
    scoreDisplay();

function computerPickMove() {

    const randomNo =Math.random();
    
    if (randomNo>0 && randomNo<1/3)  {
        computerMove = 'rock';
    } else if (randomNo>1/3 && randomNo<2/3) {
        computerMove = 'paper';
    } else if (randomNo>2/3 && randomNo<3/3) {
        computerMove = 'scissor';
    }
    return computerMove
}

document.getElementById('rock').addEventListener('click', () => {
    playerPickMove('rock');
});

document.getElementById('paper').addEventListener('click', () => {
    playerPickMove('paper');
});

document.getElementById('scissor').addEventListener('click', () => {
    playerPickMove('scissor');
});

function playerPickMove(PlayerMove) {
    computerPickMove();
    if (PlayerMove === 'rock') {
       
        if (computerMove === 'rock') {
            result = "Tie"
        } else if (computerMove === 'paper') {
            result = "You Lose"
        } else if (computerMove === 'scissor') {
            result = "You win"
        }
    } else  if (PlayerMove === 'paper') {
       
        if (computerMove === 'rock') {
            result = "You win"
        } else if (computerMove === 'paper') {
            result = "Tie"
        } else if (computerMove === 'scissor') {
            result = "You Lose"
        }
    } else if (PlayerMove === 'scissor') {
       
        if (computerMove === 'rock') {
            result = "You Lose"
        } else if (computerMove === 'paper') {
            result = "You win"
        } else if (computerMove === 'scissor') {
            result = "Tie"
        }
    }

      document.getElementById('result-js').innerHTML = 
        `<p>${result}</p>`
    console.log(result);

    displayResult(computerMove , PlayerMove);

    updateScore(result);
    scoreDisplay();
    localStorage.setItem('score', JSON.stringify(score));
    
}
function displayResult(computerMove, PlayerMove) {
   
     document.getElementById('displaycomputerMove').innerHTML =   
    `
    <img src="images/${computerMove}.png" height="200px">`
    document.getElementById('displaypayerMove').innerHTML =
     `
     <img src="images/${PlayerMove}.png" height="200px">`
    
    }

    function updateScore(result) {
        if (result === "You win") {
            score.Win+= 1
        } else if (result === "You Lose") {
            score.Lose+= 1
        } else if (result === "Tie") {
            score.Tie+= 1
        }
        
    }
function scoreDisplay() {
    document.getElementById('result-display').innerHTML = 
    ` <p> Win : ${score.Win} LOse : ${score.Lose} Tie : ${score.Tie}</p>`

}

function resetScore() {
    score = {
        Win : 0,
        Lose : 0,
        Tie : 0
    };

    scoreDisplay();
    localStorage.removeItem('score');
}

function confirmPopupOpen() {
    let popup = document.querySelector(".confirm-card");
    popup.classList.add("open-popup");
    console.log("worked")
}
function confirmPopupClose() {
    let close = document.querySelector('.confirm-card');
    close.classList.remove("open-popup");
}
  