// ============================
// Rock Paper Scissors Game
// ============================

// Elements
const choices = document.querySelectorAll(".choice");
const userImg = document.getElementById("user-img");
const computerImg = document.getElementById("computer-img");
const score = document.getElementById("score");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

// Images
const images = {
  rock: "./images/rock.png",
  paper: "./images/paper.png",
  scissor: "./images/scissor.jpeg",
};

// Score
let userScore = 0;
let computerScore = 0;

// ============================
// Rotate Animation Function
// ============================
function rotateImage(img) {
  img.classList.remove("rotate");

  // Restart animation
  void img.offsetWidth;

  img.classList.add("rotate");
}

// ============================
// Computer Choice
// ============================
function getComputerChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// ============================
// Play Game
// ============================
function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  // Change Images
  userImg.src = images[userChoice];
  computerImg.src = images[computerChoice];

  // Rotate Images
  rotateImage(userImg);
  rotateImage(computerImg);

  // Draw
  if (userChoice === computerChoice) {
    result.innerText = "🤝 It's a Draw!";
    result.style.color = "#facc15";
    return;
  }

  // User Wins
  if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    userScore++;
    result.innerText = "🎉 You Win!";
    result.style.color = "#22c55e";
  }

  // Computer Wins
  else {
    computerScore++;

    result.innerText = "😢 Computer Wins!";
    result.style.color = "#ef4444";
  }

  // Update Score
  score.innerText = `Score : ${userScore} - ${computerScore}`;
}

// ============================
// User Click
// ============================
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;

    playGame(userChoice);
  });
});

// ============================
// Reset Game
// ============================
resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;

  score.innerText = "Score : 0 - 0";
  result.innerText = "Now your move";
  result.style.color = "red";

  userImg.src = images.paper;
  computerImg.src = images.rock;

  // Rotate Images
  rotateImage(userImg);
  rotateImage(computerImg);
});
