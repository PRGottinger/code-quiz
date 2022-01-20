var startbtn = document.querySelector(".start-button");
var startQuestions = document.querySelector(".parent-into");
var otherQuestions = document.querySelector(".questions-div");
var questionText = document.querySelector("#quiz-question");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var currentIndex = 0;

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
}

var questions = [
  {
    question:
      "At the bottom of which HTML element is the best place to link to our Javascript file?",
    answers: ["a. header", "b. footer", "c. script", "d. body"],
    correct: "d. body",
  },

  {
    question: "this is the second question?",
    answers: ["a. header", "b. footer", "c. script", "d. body"],
    correct: "d. body",
  },

  {
    question: "this is the third question?",
    answers: ["a. header", "b. footer", "c. script", "d. body"],
    correct: "d. body",
  },
];

// function startQuiz() {
//   alert("start quiz");
// }

startbtn.addEventListener("click", function () {
  startQuestions.style.display = "none";
  otherQuestions.style.display = "block";
  nextQuestion();
});
