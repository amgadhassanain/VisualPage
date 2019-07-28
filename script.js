let winners = new Array();
let playerOne = new Array();
let playerTwo = new Array();
let currentPlayer = 0;
let points1 = 0;    // player 1 points
let points2 = 0;    // player 2 points
let size = 3;

function drawBoard() {

    let Parent = document.getElementById("game");
    let counter = 1;

    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (s = 0; s < 3; s++) {
        let row = document.createElement("tr");

        for (r = 0; r < 3; r++) {
            let col = document.createElement("td");
            col.id = counter;

            let handler = function rePlay(e) {
                debugger;
                if (currentPlayer == 0) {
                    this.innerHTML = "X";
                    playerOne.push(parseInt(this.id));
                    detectPlayer('player1').classList.remove('selected');
                    detectPlayer('player2').classList.add('selected');
                }

                else {
                    this.innerHTML = "O";
                    playerTwo.push(parseInt(this.id));
                    detectPlayer('player1').classList.add('selected');
                    detectPlayer('player2').classList.remove('selected');
                }

                if (checkWinner()) {
                    debugger;
                    if (currentPlayer == 0) {
                        points1++;
                        document.getElementById("player1").innerHTML = points1;
                        alert("player1 has won the game");

                    }
                    else {
                        points2++;
                        document.getElementById("player2").innerHTML = points2;
                        alert("player2 has won the game");

                    }
                    reset();
                    drawBoard();
                }

                else if (playerTwo.length + playerOne.length == 9) {
                    alert("the game was tie there is no winner");
                    reset();
                    drawBoard();
                }
                else {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                    this.removeEventListener('click', rePlay);
                }
            };

            col.addEventListener('click', handler);

            row.appendChild(col);
            counter++;
        }

        Parent.appendChild(row);
    }

    loadAnswers();
}

function detectPlayer(id) {
    let element = document.getElementById(id);
    return element;
}
function reset() {
    currentPlayer = 0;
    playerOne = new Array();
    playerTwo = new Array();
    detectPlayer('player1').classList.add('selected');
    detectPlayer('player2').classList.remove('selected');
}

function loadAnswers() {
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

function checkWinner() {
    debugger;
    let win = false;
    let playerSelections = new Array();

    if (currentPlayer == 0)
        playerSelections = playerOne;
    else
        playerSelections = playerTwo;

    if (playerSelections.length >= size) {

        for (i = 0; i < winners.length; i++) {
            let setWinner = winners[i];  // winning hand
            let findWinner = true;

            for (r = 0; r < setWinner.length; r++) {

                let foundMatched = false;

                // players hand
                for (s = 0; s < playerSelections.length; s++) {
                    if (setWinner[r] == playerSelections[s]) {
                        foundMatched = true;
                        break;
                    }
                }

                if (foundMatched == false) {
                    findWinner = false;
                    break;
                }
            }
            if (findWinner == true) {
                win = true;
                break;
            }
        }
    }
    return win;
}
window.addEventListener('load', drawBoard);