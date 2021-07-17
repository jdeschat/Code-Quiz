var body = document.body;
var currentQuestionIndex = -1;
var quizData = [
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within _____.",
        answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
        correctAns: 2
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correctAns: 3
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        correctAns: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "Terminal/bash", "For loops", "console.log"],
        correctAns: 3
    }
];
var time = 60;
var timer;
var display = document.querySelector("#time");
if (!localStorage.getItem("highScores")) {
    localStorage.setItem("highScores", JSON.stringify([]));
}

// If we are on highscores page
if (window.location.pathname === "/Users/joelledeschatelets/Desktop/Challenges/challenge-module-4/highscores.html") {
    let scores = JSON.parse(localStorage.getItem("highScores"));
    let scoreBoard = document.querySelector("#scoreBoard");
    for (let i = 0; i < scores.length; i++) {
        let liEl = document.createElement('li');
        liEl.textContent = scores[i].name + " - " + scores[i].score;
        scoreBoard.appendChild(liEl);
    }
} else {

    // ADD TIMER START
    function startTimer() {
        time = time - 1;
        display.textContent = time;
        if (time <= 0) {
            doneGame();
        }
    }
    // ADD TIMER END


    function showQuestion() {
        // check if we're at the last question
        if (currentQuestionIndex >= 4) {
            return doneGame();
        }
        currentQuestionIndex++;
        console.log("currentQuestionIndex", currentQuestionIndex);


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
        // e.stopPropagation();
        // e.preventDefault();
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
            time -= 10;
        }
        setTimeout(showQuestion, 1000);
    }


    // Done game page START
    function doneGame() {
        clearInterval(timer);
        var yourFinalScore = document.querySelector('.finalScore');
        var doneGameScreen = document.querySelector('.done');
        doneGameScreen.style.display = "block";
        var hideQuestions = document.querySelector("#questionContainer");
        hideQuestions.style.display = "none";
        yourFinalScore.textContent = `Your final score is ${time}`;
        highScores();

    }

    function highScores() {

        var submitScores = document.querySelector("#submitBtn");
        submitScores.addEventListener("click", function () {
            // capture initials, save to local storage, and go to highscores page
            let initialsEl = document.querySelector("#initials");
            let initials = initialsEl.value;
            let localScores = JSON.parse(localStorage.getItem("highScores"));
            localScores.push({
                name: initials,
                score: time
            });
            localStorage.setItem("highScores", JSON.stringify(localScores));
            window.open("./highscores.html");

            // var scoreSheet = document.querySelector('.finalScore');

            // for (let i = 0; i < 10; i++) {
            //     scoreSheet[i];
            // }
            // scoreSheet.textContent = `${i} ${#initials} - ${time}`;


        });

        // var goBack = document.querySelector("#goBack");
        // goBack.addEventListener("click", function () {

        // })

    };

    // Clear HighScores
    var clearBtn = document.getElementById("clearHighScores");
    clearBtn.addEventListener("click", clearScores);
    function clearScores() {
        localStorage.setItem("highScores", JSON.stringify([]));
        // TODO: clear the lists of high scores on the screen

    }


    // Done game page END

    // Start quiz start
    var startBtn = document.getElementById("startBtn");
    // TODO: check if startBtn is now
    startBtn.addEventListener("click", startQuiz);

    function startQuiz() {
        var firstMessage = document.getElementById("start-quiz");
        firstMessage.style.display = "none";
        timer = setInterval(startTimer, 1000);
        showQuestion();
    }
    // Start quiz end

}