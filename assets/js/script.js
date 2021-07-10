var body = document.body;
var currentQuestionIndex = -1;
var quizData = [
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    }
];

// ADD TIMER START
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
            // Use `clearInterval()` to stop the timer - THIS DIDNT WORK TO STOP
            clearInterval(timeInterval);

            // Call the `doneGame()` function
            doneGame();
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
// ADD TIMER END




function showQuestion() {
    currentQuestionIndex++;
    // if (lastQuestion) - check if the quiz is done
    // lastQuestion();

    var currentQuestionData = quizData[currentQuestionIndex];
    // Add a list of question 1 answers START
    var dataTypes = document.createElement('h1');
    var listEl = document.createElement('ol');
    listEl.addEventListener("click", function (e) {
        checkChoice(e);
    });
    var li1 = document.createElement('li');
    li1.setAttribute("id", "choice1");
    var li2 = document.createElement('li');
    li2.setAttribute("id", "choice2");
    var li3 = document.createElement('li');
    li3.setAttribute("id", "choice3");
    var li4 = document.createElement('li');
    li4.setAttribute("id", "choice4");

    dataTypes.textContent = currentQuestionData.question;
    li1.textContent = currentQuestionData.answers[0];
    li2.textContent = currentQuestionData.answers[1];
    li3.textContent = currentQuestionData.answers[2];
    li4.textContent = currentQuestionData.answers[3];

    // dataTypes.setAttribute('style', 'font-size:20px;');
    // listEl.setAttribute('style', 'background: #888888; padding: 20px;');
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";
    questionContainer.appendChild(dataTypes);
    dataTypes.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

}
// Add a list of question 1 answers END

var correctAnswerCounter = 0;

// create a function named checkAnswer. get what the user selected, use the correct answer in curentQuestionData and compare it then continue
function checkChoice(e) {
    // console.log(e.target.textContent);
    let currentQuestionData = quizData[currentQuestionIndex];
    let correctChoiceIndex = currentQuestionData.correctAns;
    let correctChoiceText = currentQuestionData.answers[correctChoiceIndex];
    // console.log(correctChoiceText);
    let result = document.createElement('p');
    var questionContainer = document.getElementById("questionContainer");
    questionContainer.appendChild(result);
    if (e.target.textContent === correctChoiceText) {
        correctAnswerCounter++;
        result.textContent = "Correct!";
    } else {
        result.textContent = "Wrong!";
    }
    setTimeout(showQuestion, 3000);
}

// function followingQuestion() {
//     currentQuestionIndex++;
//     showQuestion();
// }
// Done game page START
function doneGame() {

}


// Done game page END
var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    var firstMessage = document.getElementById("start-quiz");
    firstMessage.style.display = "none";
    showQuestion();
}