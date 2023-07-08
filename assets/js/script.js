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

//Number of clicks made. If it is clicked 9 times then a draw message will be displayed.
let count = 0;

//Players scores
let playerXScore = 0;
let playerOScore = 0;





