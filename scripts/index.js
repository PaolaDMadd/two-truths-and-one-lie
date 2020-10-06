
let gameSentences = document.getElementById("gameSentences");

let guesses = document.getElementsByClassName("guess");
let winner = document.getElementById("winnerContainer");
let loser = document.getElementById("loserContainer");


function startgame(e) {
  if (gameSentences.display === "block") {
    gameSentences.style.display = "none";
  } else {
    gameSentences.style.display = "block";
  }
}

function quitgame(e) {
  if (gameSentences.display === "none") {
    gameSentences.style.display = "block";
  } else {
    gameSentences.style.display = "none";
    winner.style.display = "none";
    loser.style.display = "none";
  }
}

function lieDetector(answerSelected) {
  for (let guess of guesses) {
    guess.disabled = true
  };

  if (answerSelected == "2") {
    winner.style.display = "flex";
  } else {
    loser.style.display = "flex";
  }
}



//refresh function

function reset() {
  for (let guess of guesses) {
    guess.disabled = false
  };
  winner.style.display = "none";
  loser.style.display = "none";
}

function init() {
  let btnPlay = document.getElementById("btnPlay");
  let btnReset = document.getElementById("btnReset");
  let btnQuit = document.getElementById("btnQuit");

  btnPlay.addEventListener("click", startgame);
  btnQuit.addEventListener("click", quitgame);
  btnReset.addEventListener("click", reset);

  for (let guess of guesses) {
    guess.addEventListener("click", event =>
      lieDetector(event.target.dataset.answer)
    );
  }

};

init();
