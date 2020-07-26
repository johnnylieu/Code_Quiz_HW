// questions array
// var questions = ["q1", "q2", "q3", "q4"];

// questions as objects
var questionArr = [
    {
        question: "Where do style links go?",
        choices: ["<body>", "<script>", "<footer>", "<head>"],
        Answer: "<head>"
    },{
        question: "What does JS stand for?",
        choices: ["Just Saying", "Jordans", "JavaScript", "All of the above"],
        Answer: "Java Script"
    },{
        question: "Which company developed JavaScript?",
        choices: ["AOL", "Netscape", "Microsoft", "Death Row Records"],
        Answer: "Netscape"
    },{
        question: "Which is the symbol for 'not equal?'",
        choices: ["<(-_-')>", "^_^", "=]", "!=="],
        Answer: "!=="
    },{
        question: "What is a tool used for debugging for printing content to the debugger?",
        choices: ["A sledge hammer", "Your neighbor", "Console Log", "Netscape 800 support line"],
        Answer: "Console Log"
    },
]

// setting variables
var score = 0;
var question = 0;
var timer = document.querySelector("#timer");
var questionsDiv = document.querySelector("#questionsDiv");
var startTime = document.querySelector("#startTime");
var wrapper = document.querySelector("#wrapper");

// 20 seconds per question
var secondsLeft = 101;
// seconds in between questions
var interval = 0;
// 5 seconds off each wrong answer
var wrong = 5;
// create new element
var ulNew = document.createElement("ul");

// starts timer on button, shows user a display on screen
timer.addEventListener("click", function (){
    if (interval === 0) {
        interval = setInterval (function(){
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <=0) {
                clearInterval(interval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questions);
});

// renders questions and choices to page
function render(questions) {
    // clears existing data
    questionsDiv.innerText = "";
    ulNew.innerText = "";
    // for loop
    for (var i = 0; i < questionArr.length; i++); {
        var userQuestion = questions(question).title;
        var userChoices = questions(question).choices;
        questionsDiv.textContent = userQuestion;
    }
    // new for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listeItem.addEventListener("click", (compare));
    })
};

// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        
        var createDiv = document.createElement("div");
        createDiv.setAttribute ("id", "createDiv");

        if (element.textContent == questions[question].answer) {
            score++;
            createDiv.textContent = "Correct!";
        } else {
            secondsLeft = secondsLeft - wrong;
            createDiv.textContent = "Incorrect! The correct answer is " + questions[question].answer;
        }
    }
}

// got this from my tutor
// for (var i =0; questionArr[0].choices.length; i++) {
//     var choice = document.createElement("button");
//     choice.setAttribute("value", questionArr[0].choices[i]);
//     choice.setAttribute("class", "choice");
//     choice.textContent = questionArr[i].choices[i];
// }
// function for questions
// function q1 () {
//     var newDiv = document.createElement("li");
//     var newContent = document.createTextNode("What's 1+2?");
//     newDiv.appendChild(newContent);
// };


// code  i might use later
// document.getElementById("demo").text = "Hello World";