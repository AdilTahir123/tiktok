


// Variables
let boxes = document.querySelectorAll(".boxes button");
let player = document.getElementById("player");
let resetBtn = document.getElementById("reset");

let xTurn = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// Button Click
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (xTurn) {
            box.innerText = "X";
            xTurn = false;
            player.innerText = "O";
        } else {
            box.innerText = "O";
            xTurn = true;
            player.innerText = "X";
        }

        box.disabled = true;

        checkWinner();
    });
});

// Winner Check
function checkWinner() {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (
            pos1 !== "" &&
            pos1 === pos2 &&
            pos2 === pos3
        ) {

            // Highlight Winner
            boxes[pattern[0]].classList.add("winner");
            boxes[pattern[1]].classList.add("winner");
            boxes[pattern[2]].classList.add("winner");

            // Show Winner
            player.innerText = `${pos1} Wins!`;

            // Disable All Boxes
            boxes.forEach((box) => {
                box.disabled = true;
            });

            return;
        }
    }

    // Draw Check
    let allFilled = true;

    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        player.innerText = "Draw!";
    }
}

// Reset Game
function resetGame() {

    xTurn = true;
    player.innerText = "X";

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("winner");
    });
}

resetBtn.addEventListener("click", resetGame);