// questions array
var questions = ["q1", "q2", "q3", "q4"];

var questionArr = [
    {
        question1: "Where do style links go?",
        choices: ["<body>", "<script>", "<footer>", "<head>"],
        correctAnswer: "<head>"
    },{
        question2: "Where do style links go?",
        choices: ["<body>", "<script>", "<footer>", "<head>"],
        correctAnswer: "<head>"
    },{
        question3: "Where do style links go?",
        choices: ["<body>", "<script>", "<footer>", "<head>"],
        correctAnswer: "<head>"
    },{
        question4: "Where do style links go?",
        choices: ["<body>", "<script>", "<footer>", "<head>"],
        correctAnswer: "<head>"
    },
]

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

// start quiz when button is clicked
document.getElementById("startTime").addEventListener("click", function(){
    for (var = i; i < questions.length; i++);

  });


// code  i might use later
//   document.getElementById("demo").text = "Hello World";