var question = document.getElementById("quizQuest");
var ansOne = document.getElementById("answerOne");
var ansTwo = document.getElementById("answerTwo");
var ansThree = document.getElementById("answerThree");
var ansFour = document.getElementById("answerFour");
var quizzer = document.getElementById("quiz");
var gameScore = document.getElementById("gameScore");

var questionCount = 0;
var userScore = 0;

// Below is the array of objects containing the questions and answers
var questions = [
  {
    quest: "Here is question 1?",
    answer: "answerOne",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
  {
    quest: "Here is question 2?",
    answer: "answerOne",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
  {
    quest: "Here is question 3?",
    answer: "answerOne",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
  {
    quest: "Here is question 4?",
    answer: "answerOne",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
  {
    quest: "Here is question 5?",
    answer: "answerOne",
    incans: ["incorrect answer 1", "incorrect answer 2", "incorrect answer 3"],
  },
];

quizzer.addEventListener("click", startTimer);
ansOne.addEventListener("click", askQuestion);
ansTwo.addEventListener("click", askQuestion);
ansThree.addEventListener("click", askQuestion);
ansFour.addEventListener("click", askQuestion);


var timeLeft = 60;
//This function starts the countdown
function startTimer() {
//   askQuestion();
  var timer = setInterval(function () {
    timeLeft--;
    quizzer.textContent = timeLeft + " seconds remaining";

    if (timeLeft === 0) {
      clearInterval(timer);
      window.alert("Times Up!")
    }
  }, 1000);
  question.textContent = questions[questionCount].quest;
  ansOne.textContent = questions[questionCount].answer;
  ansTwo.textContent = questions[questionCount].incans[0];
  ansThree.textContent = questions[questionCount].incans[1];
  ansFour.textContent = questions[questionCount].incans[2];

};


function askQuestion(event) {
    console.log(event)
    var userAnswer = event.target.id;
    if (userAnswer === questions[questionCount].answer){
        //handle correct answer
        userScore += 1;
        gameScore.textContent = userScore + "/" + questions.length;
    } else {
        gameScore.textContent = userScore + "/" + questions.length;

        // wrong answer
    }

   if(questionCount < questions.length){
       questionCount += 1;
   };

    console.log(userAnswer === questions[questionCount].answer);
    question.textContent = questions[questionCount].quest;
  ansOne.textContent = questions[questionCount].answer;
  ansTwo.textContent = questions[questionCount].incans[0];
  ansThree.textContent = questions[questionCount].incans[1];
  ansFour.textContent = questions[questionCount].incans[2];
}; 
   
