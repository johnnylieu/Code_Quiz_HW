const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let times = 60;
let timePenalty = 5;

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

const correct_bonus = 25;
const max_questions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    // once all questions loaded
    if(availableQuestions.length === 0 || questionCounter >= max_questions){
    locatlStorage.setItem('mostRecentScore', score);
    //go to end page
    return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + max_questions;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

//loads new question after user clicks an answer
choices.forEach(choice =>{
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if(classToApply === 'correct') {
        incrementScore(correct_bonus);
    }

    if(classToApply === 'incorrect') {
        times = times - timePenalty;
    }
    
    selectedChoice.parentElement.classList.add(classToApply);

    // time delay before going to next question so everyone can see my cool green and red colors when selecting correct/incorrect answer
    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);    
        getNewQuestion ();
    }, 200);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

function countDown () {
    times = times -1;
    if (times < 60) {
        time001.innerHTML = times;
    }

    if (times <1) {
        window.clearInterval(update);
    }

    if (times <= 0) {
        window.location = "end.html";
        clearInterval(end);
    }
}

update = setInterval("countDown()", 1000);

startGame();