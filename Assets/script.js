var startbtn = document.querySelector(".start-button");
var startQuestions = document.querySelector(".parent-into");
var otherQuestions = document.querySelector(".questions-div");
var questionText = document.querySelector("#quiz-question");
var score = document.querySelector(".show-score");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var currentIndex = 0;
var counter = 30;
var countdown;

// var startCountdown = setInterval(countdown, 1000);

// function highScore() {
//   otherQuestions.style.display = "none";
//   score.style.display = "block";
// }

function checkAnswer(event) {
  console.log(event);

  var selectedAnswer = event.target.textContent;
  var correctAnswer = questions[currentIndex].correct;

  if (selectedAnswer == correctAnswer) {
    alert("that is correct");
  } else {
    alert("that is not correct");
    counter -= 5;
  }

  currentIndex++;

  nextQuestion();
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    questionText.textContent = questions[currentIndex].question;

    button1.textContent = questions[currentIndex].answers[0];
    button1.addEventListener("click", checkAnswer);
    button2.textContent = questions[currentIndex].answers[1];
    button2.addEventListener("click", checkAnswer);
    button3.textContent = questions[currentIndex].answers[2];
    button3.addEventListener("click", checkAnswer);
    button4.textContent = questions[currentIndex].answers[3];
    button4.addEventListener("click", checkAnswer);
  } else {
    clearInterval(countdown);
    otherQuestions.style.display = "none";
    score.style.display = "block";
    alert("You finished the quiz");
    counter.style.display = "none";

    highScore();
  }
}

// function endGame() {
//   if (counter >= 1 &&
//     highScore();
//   }
// }

// function gameOver() {
//   otherQuestions.style.display = "none";
// }

// function endGame() {
//   if (questionsIndex < questions.length - 1) {
//     gameOver();
// }
//  }

var questions = [
  {
    question: "Where in our HTML do we link to our Javascript file?",
    answers: ["a. header", "b. footer", "c. script", "d. body"],
    correct: "d. body",
  },

  {
    question: "How do you comment in JavaScript?",
    answers: ["a.  //This", "b. <!--This-->>", "c. !This", "d. This"],
    correct: "a.  //This",
  },

  {
    question: "How do you declare a JavaScript variable?",
    answers: [
      "a. v catName",
      "b. var catName",
      "c. variable catName",
      "d. MyCatVar",
    ],
    correct: "b. var catName",
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["a. <script> ", "b. <js> ", "c. <javascript> ", "d. style.js "],
    correct: "a. <script> ",
  },

  {
    question: "Which operator is used to assign a value to a variable?",
    answers: ["a. * ", "b. = ", "c. + ", "d. - "],
    correct: "b. = ",
  },

  {
    question: "Quiz Finished!",
  },
];

function scores() {
  let oldScores = JSON.parse(localStorage.getItem("highScore"));
  console.log(oldScores[0].initials);
  console.log(oldScores[0].score);
  console.log(JSON.parse(localStorage.getItem("highScore")));
}

function highScore(event) {
  event.preventDefault();
  let score = counter;
  let initials = event.target.children[0].value;
  document.getElementById("finalScore").innerText = `${initials}    ${counter}`;
  let oldScores = JSON.parse(localStorage.getItem("highScore"));
  let finalScore = {
    initials: initials,
    score: score,
  };

  let allScores = [finalScore, ...oldScores];

  oldScores.map((currElem, index) => {
    let p = document.createElement("p");
    p.innerText = `${currElem.initials}${currElem.score}`;
    document.getElementById("scoreContainer").appendChild(p);
  });

  localStorage.setItem("highScore", JSON.stringify(allScores));

  scores();
}

startbtn.addEventListener("click", function () {
  startQuestions.style.display = "none";
  otherQuestions.style.display = "block";

  countdown = setInterval(timer, 1000);
  nextQuestion();
});

function timer() {
  counter--;
  // counter = 30;
  clock.textContent = counter;

  if (counter < 0) {
    alert("Game Over! Enter Your Intials to see your Score");
    clearInterval(countdown);
    otherQuestions.style.display = "none";
    score.style.display = "block";
    counter = 0;
    clock.textContent = counter;
  }
}

function stopClock() {
  clearInterval(countdown);
}
