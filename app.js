let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userpara = document.querySelector("#user-score");
const computerpara = document.querySelector("#computer-score");
const getcomputerchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randindex = Math.floor(Math.random() * 3);
  return options[randindex];
};

const shaowwinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userscore++;
    userpara.innerText = userscore;
    console.log("You win");
    msg.innerText = `You win! your  ${userchoice} beats ${computerchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerscore++;
    computerpara.innerText = computerscore;
    console.log("computer win");
    msg.innerText = `computer win! ${computerchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};
const drawgame = () => {
  console.log("game draw");
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor = "blue";
};
const playgame = (userchoice) => {
  console.log("user choice was ", userchoice);
  const computerchoice = getcomputerchoice();
  console.log("computer choice was", computerchoice);

  if (userchoice === computerchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissor" ? false : true;
    } else {
      userwin = computerchoice === "rock" ? false : true;
    }
    shaowwinner(userwin, userchoice, computerchoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");

    playgame(userchoice);
  });
});
