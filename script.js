var question = document.getElementById("quizQuest");

var ansOne = document.getElementById("answerOne");

var ansTwo = document.getElementById("answerTwo");

var ansThree = document.getElementById("answerThree");

var ansFour = document.getElementById("answerFour");

var quizzer = document.getElementById("quiz");

var i = 0

var questions = [
  {
    quest: "Here is question 1?",
    answer: "correct answer 1",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
  {
    quest: "Here is question 2?",
    answer: "correct answer 2",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
  {
    quest: "Here is question 3?",
    answer: "correct answer 3",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
];

quizzer.addEventListener("click", startTimer);

var timeLeft = 60;
console.log(quizzer);

function startTimer() {
    askQuestion();
  var timer = setInterval(function () {
    timeLeft--;
    quizzer.textContent = timeLeft + " seconds remaining";

    if (timeLeft === 0) {
      clearInterval(timeLeft);
    }
  }, 1000);
}


function askQuestion() {
    question.textContent = questions[i].quest;
    ansOne.textContent = questions[i].answer;
    ansTwo.textContent = questions[i].incans[0];
    ansThree.textContent = questions[i].incans[1];
    ansFour.textContent = questions[i].incans[2];

}

