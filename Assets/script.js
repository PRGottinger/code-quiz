var startbtn = document.querySelector(".start-button");
var startQuestions = document.querySelector(".parent-into");
var otherQuestions = document.querySelector(".questions-div");
var questionText = document.querySelector("#quiz-question");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var currentIndex = 0;
// var counter = 30;
// var startCountdown = setInterval(countdown, 1000);

// var countdown = setInterval(function () {
//   counter--;
//   if (counter === 0) {
//     console.log("you lost!");
//   }
// };

// function endGame() {

// }

function checkAnswer(event) {
  console.log(event);

  var selectedAnswer = event.target.textContent;
  var correctAnswer = questions[currentIndex].correct;

  if (selectedAnswer == correctAnswer) {
    alert("that is correct");
  } else {
    alert("that is not correct");
  }

  currentIndex++;

  nextQuestion();
}

function nextQuestion() {
  questionText.textContent = questions[currentIndex].question;

  button1.textContent = questions[currentIndex].answers[0];
  button1.addEventListener("click", checkAnswer);
  button2.textContent = questions[currentIndex].answers[1];
  button2.addEventListener("click", checkAnswer);
  button3.textContent = questions[currentIndex].answers[2];
  button3.addEventListener("click", checkAnswer);
  button4.textContent = questions[currentIndex].answers[3];
  button4.addEventListener("click", checkAnswer);

  // endGame();
}

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
];

// function startQuiz() {
//   alert("start quiz");
// }

startbtn.addEventListener("click", function () {
  startQuestions.style.display = "none";
  otherQuestions.style.display = "block";
  nextQuestion();
  countdown();
});
