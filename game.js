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
        question: "What is a tool used for debugging for printing content to the debugger?",
        choice1: "A sledge hammer",
        choice2: "Your neighbor",
        choice3: "Console Log",
        choice4: "Netscape 800 support line",
        answer: 3
    }
];

const correct_bonus = 10;
const max_questions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
};

startGame();