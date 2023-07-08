// Adding all the elements needed from the html
let buttons = document.querySelectorAll(".field"),
    popupmessageE1 = document.querySelector(".popup-message"),
    messageE1 = document.querySelector(".message"),
    newGameBtn = document.querySelector(".new-game"),
    restartBtn = document.querySelector(".restart"),
    playerXScoreE1 = document.querySelector(".player-x"),
    playerOScoreE1 = document.querySelector(".player-o");
// Which players turn it is: 0 is for O and 1 is for X
let turnFlag = 0;
//Number of clicks made. If it is clicked 9 times then a draw message will be displayed
let count = 0;
//Players scores
let playerXScore = 0;
let playerOScore = 0;
//Buttons combinations to win the game
let winningPosition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
//Event Listener for buttons
newGameBtn.onclick = function () {
    enableButtons();
    determineFirstTurn();
    count = 0;
};
restartBtn.onclick = function () {
    enableButtons();
    determineFirstTurn();
    count = 0;
};
//Functions
function disableButtons() {
    buttons.foreach((button) => {
        button.disabled = true;
    });
    //Shows pop up message after a certain time
    setTimeout(() => {
        popupmessageE1.classList.add("show");
    }, 500);
    function enableButtons() {
        buttons.forEach((button) => {
            button.disabled = false;
            button.innerText = '';
            button.style.backgroundColor = "#FFB739";
            button.style.color = "rgb(132, 130, 149)";
        });
    }
    // Removes pop up message
    popupmessageE1.classList.remove("show");
}
//Display winning message
function wins(button1, button2, button3) {
    disableButtons();
    //Sets different color to winning buttons
    button1.setAttribute("style", "color:blue; background-color:grey");
    button2.setAttribute("style", "color:blue; background-color:grey");
    button3.setAttribute("style", "color:blue; background-color:grey");
    //Display the winner
    messageE1.innerText = 'Player $ {button1.innerText} wins';
}
//Display the draw message and disable the buttons
function draw() {
    disableButtons();
    messageE1.innerText = 'Game Drawn';
}
//Update the Score 
function updateScore(value) {
    if (value == "X") {
        playerXScore++;
        playerXScoreE1.innerText = playerXScore;
    }
    else {
        playerOScore++;
        playerOScoreE1 = playerOScore;
    }
    //Check for the winner
    function checkwins() {
        for (let i = 0; i < winningPosition.length; i++) {
            let [element1, element2, element3] = [
                buttons[winningPosition[i][0]],
                buttons[winningPosition[i][1]],
                buttons[winningPosition[i][2]],
            ];
            //Check if the elements above are filled in (either with and X or O)
            if (element1.innerText != "" && element2.innerText != "" && element3.innerText != "") {
                //Check elements have the same value or not 
                if (element1.innerText == element2.innerText && element2.innerText == element3.innerText && element3.innerText == element1.innerText) {
                    updateScore(element1.innerText);
                    disableButtons();
                    wins(element1, element2, element3);
                };
            }
        }
    };
    //Write X or O on the button clicked
    buttons.forEach((button) => {
        button.onclick = function () {
            if (turnFlag === 0) {
                button.innerText = "O";
                console.log("O ->" + button.innerText);
                button.disabled = true;
                turnFlag = 1;
            } else {
                button.innerText = "X";
                console.log("X ->" + button.innerText);
                button.disabled = true;
                turnFlag = 0;
            }
            count++;
            if (count === 9) {
                draw();
            }
            checkwins();
        };
    });
};
updateScore();