var question = document.getElementById("quizQuest");
var ansOne = document.getElementById("0");
var ansTwo = document.getElementById("1");
var ansThree = document.getElementById("2");
var ansFour = document.getElementById("3");
var quizzer = document.getElementById("quiz");
var gameScore = document.getElementById("gameScore");
var showAns = document.getElementById("showAnswer");
var finalScore = document.getElementById("finScore");
var ansList = document.getElementsByClassName("answerList");
var initials = document.getElementById("initials");
var initialsInput = document.getElementById("initialsInput");
var submitButton = document.getElementById("submitButton");

var questionCount = 0;
var userScore = 0;

// Below is the array of objects containing the questions and answers
var questions = [
  {
    quest:
      "What tag is used to define the bottom section (footer) of an HTML document?",
    answer: "<footer>",
    options: ["<footer>", "<container>", "<body>", "<p>"],
  },
  {
    quest:
      "What tag can be used to insert a line break or blank line in an HTML document?",
    answer: "<br>",
    options: ["<p>", "<head>", "<br>", "<title>"],
  },
  {
    quest: "What tag is used to underline a word or line of text?",
    answer: "<u>",
    options: ["<li>", "<u>", "<p>", "<ul>"],
  },
  {
    quest: "What tag is used to define a table or image notation (caption)?",
    answer: "<caption>",
    options: ["<embed>", "<code>", "<caption>", "<meta>"],
  },
  {
    quest:
      "What group of tags are used to define the text headers in the body of the HTML document??",
    answer: "<h1 to h6>",
    options: ["<h1 to h6>", "<footer>", "<button>", "<table>"],
  },
];

quizzer.addEventListener("click", startTimer);
ansOne.addEventListener("click", askQuestion);
ansTwo.addEventListener("click", askQuestion);
ansThree.addEventListener("click", askQuestion);
ansFour.addEventListener("click", askQuestion);
submitButton.addEventListener("click", enterName);

var timeLeft = 60;
//This function starts the countdown
function startTimer() {
  //  askQuestion();
  var timer = setInterval(function () {
    timeLeft--;
    quizzer.textContent = timeLeft + " seconds remaining";

    if (timeLeft === 0 || questionCount === 5 || userScore === 5) {
      clearInterval(timer);
      // window.alert("You have finished the quiz!");
      //call a function here that allows user to enter initals and see the score
      scoreKeeper();
    }
  }, 1000);
  question.textContent = questions[questionCount].quest;
  ansOne.textContent = questions[questionCount].options[0];
  ansTwo.textContent = questions[questionCount].options[1];
  ansThree.textContent = questions[questionCount].options[2];
  ansFour.textContent = questions[questionCount].options[3];
}

function askQuestion(event) {
  console.log(questionCount);

  if (questionCount + 1 === questions.length) {
    initials.style.display = "flex";
    //Handles game over
    scoreKeeper();
    return;
    console.log("abc");
  }
  var userChoiceId = event.target.id;
  console.log(userChoiceId, questions[questionCount].answer);
  if (
    questions[questionCount].options[userChoiceId] ===
    questions[questionCount].answer
  ) {
    //handles a correct answer
    userScore += 1;
    gameScore.textContent = userScore + "/" + questions.length;
    showAns.textContent = "Correct answer!";
  } else {
    // handles a wrong answer
    gameScore.textContent = userScore + "/" + questions.length;
    showAns.textContent = "Incorrect answer!";
    timeLeft = timeLeft - 10;
  }

  questionCount += 1;
  question.textContent = questions[questionCount].quest;
  ansOne.textContent = questions[questionCount].options[0];
  ansTwo.textContent = questions[questionCount].options[1];
  ansThree.textContent = questions[questionCount].options[2];
  ansFour.textContent = questions[questionCount].options[3];
}

function scoreKeeper() {
  // this will allow user to enter their initials
  finalScore.textContent = userScore + timeLeft;
}
function enterName(event) {
  var name = initialsInput.value;
  localStorage.setItem("name", name);
  initialsInput.value = "";
}
