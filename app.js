let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(user, computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const glowIcon = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord}. You WIN! 🔥`;
  glowIcon.classList.add("green-glow");
  setTimeout(() => glowIcon.classList.remove("green-glow"), 300);
}
function lose(user, computer) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const glowIcon = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} loses to ${convertToWord(computer)} ${smallCompWord}. You LOSE! 😭`;
  glowIcon.classList.add("red-glow");
  setTimeout(() => glowIcon.classList.remove("red-glow"), 300);
}
function draw(user) {
  const glowIcon = document.getElementById(user);
  result_p.innerHTML = "It's a DRAW 🙀";
  glowIcon.classList.add("yellow-glow");
  setTimeout(() => glowIcon.classList.remove("yellow-glow"), 300);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();