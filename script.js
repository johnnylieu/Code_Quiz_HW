// questions array
// var questions = ["q1", "q2", "q3", "q4"];

// questions as objects
var questionArr = [
    {
        question: "Where do style links go?",
        choices: ["<body>", "<script>", "<footer>", "<head>"],
        correctAnswer: "<head>"
    },{
        question: "What does JS stand for?",
        choices: ["Just Saying", "Jordans", "JavaScript", "All of the above"],
        correctAnswer: "Java Script"
    },{
        question: "Which company developed JavaScript?",
        choices: ["AOL", "Netscape", "Microsoft", "Death Row Records"],
        correctAnswer: "Netscape"
    },{
        question: "Which is the symbol for 'not equal?'",
        choices: ["<(-_-')>", "^_^", "=]", "!=="],
        correctAnswer: "!=="
    },{
        question: "What is a tool used for debugging for printing content to the debugger?",
        choices: ["A sledge hammer", "Your neighbor", "Console Log", "Netscape 800 support line"],
        correctAnswer: "Console Log"
    },
]

// setting variables
var score = 0;
var timer = document.querySelector("#timer");
var startTime = document.querySelector("#startTime");
var wrapper = document.querySelector("#wrapper");

//20 seconds per question
var secondsLeft = 101;

for (var i =0; questionArr[0].choices.length; i++) {
    var choice = document.createElement("button");
    choice.setAttribute("value", questionArr[0].choices[i]);
    choice.setAttribute("class", "choice");
    choice.textContent = questionArr[i].choices[i];
}
// function for questions
function q1 () {
    var newDiv = document.createElement("li");
    var newContent = document.createTextNode("What's 1+2?");
    newDiv.appendChild(newContent);
};


// code  i might use later
// document.getElementById("demo").text = "Hello World";