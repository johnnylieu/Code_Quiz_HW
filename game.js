const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What does JS stand for?",
        choice1: "Just saying",
        choice2: "Jordans",
        choice3: "JavaScript",
        choice4: "All the above",
        answer: 3
    },{
        question: "Which company developed JavaScript?",
        choice1: "Aol",
        choice2: "Netscape",
        choice3: "Microsoft",
        choice4: "Death Row Records",
        answer: 2
    },{
        question: "Which is the symbol for 'not equal?'",
        choice1: "<(-_-')>",
        choice2: "^_^",
        choice3: ">=]",
        choice4: "!==",
        answer: 4
    },{
        question: "What is a tool used for debugging for printing content to the debugger?"
        choice1: "A sledge hammer",
        choice2: "Your neighbor",
        choice3: "Console Log",
        choice4: "Netscape 800 support line",
        answer: 3
    }
]