
let gameSentences = document.getElementById("gameSentences");

let guesses = document.getElementsByClassName("guess");
let winner = document.getElementById("winnerContainer");
let loser = document.getElementById("loserContainer");
// p tag

function populateButton() {

  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");

  let truths = [
    { value: "I studied at Beijing Language University for a semester.", status: "truth" },
    { value: "I worked in the same hotel in Paris for five years.", status: "truth" },
    { value: "My middle-name's English translation is a week day.", status: "truth" },
    { value: "I volunteered for a non-profit organization for ten years.", status: "truth" },
    { value: "During covid-19, I learned to make home bread with natural yeast.", status: "truth" },
    { value: "I build this game in less time than I thought.", status: "truth" }
  ];

  let lies = [
    { value: "When I was a child I had two dogs and a cat.", status: "lies" },
    { value: "Two years ago I run the 5k marathon in London.", status: "lies" },
    { value: "I lived in Brasil with my grandmother until I was 5 y.o.", status: "lies" }
  ];

  let shuffledLies = getShuffled(lies);
  let shuffledTruths = getShuffled(truths);

  let questions = [shuffledLies[0], shuffledTruths[0], shuffledTruths[1]];
  let shuffledQuestions = getShuffled(questions);

  one.innerHTML = shuffledQuestions[0].value;
  one.setAttribute("data-status", shuffledQuestions[0].status);
  two.innerHTML = shuffledQuestions[1].value;
  two.setAttribute("data-status", shuffledQuestions[1].status);
  three.innerHTML = shuffledQuestions[2].value;
  three.setAttribute("data-status", shuffledQuestions[2].status);
}

// shuffle the sentences:

function getShuffled(array) {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

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

  if (answerSelected == "lies") {
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

  populateButton();
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
      lieDetector(event.target.dataset.status)
    );
  }

  populateButton();

};

init();
