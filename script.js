//Assigning Referencs and Importing Questions----------------------------------------------------
//import questions from 'questions.js';
var time = document.querySelector('#timer');
var start = document.querySelector('#startQuiz');
var homeScreen = document.querySelector('#homeScreen');


//Global variables
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        title: 'The conidtion in an if / else statment is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'parentheses'
    }
];
var timeTotal = questions.length * 15;

//Functions ----------------------------------------------------------------------------------------

function timerStart() {
    time.textContent = timeTotal;
    var timerInterval = setInterval(function () {
        if (timeTotal === 0) {
            return;
        } else {
            timeTotal--;
            time.textContent = timeTotal;
        }
    }
        , 1000);
}

function clearStart() { 
    //method for removing node found on https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    var wipe = homeScreen.cloneNode(false); //creates an idential node that is false (blank)
    homeScreen.parentNode.replaceChild(wipe, homeScreen); // swaps the origional node for the blank node
};

function startQuestions() {
    for (i=0; )
    var numAnswers = questions[1].choices.length;  //adding a variable to determine number of buttons needed for answers, could loop this for varying number of answers. Would require this function be recalled for every question. 
    var prompts = document.querySelector('#prompts');
    var titleBlock = document.createElement('h2');
    prompts.appendChild(titleBlock);
    titleBlock.setAttribute('id','qTitle');

    var qTitle = document.querySelector('#qTitle');

    for (var i = 0; i < numAnswers ; i++) { // Looping through all of the questions to build the correct number of buttons and storing them with the corect index
        var answers = document.createElement('buttons');
        qTitle.appendChild(answers);
        answers.setAttribute('data-index', i);
    }

    var feedback = document.createElement('p');
    document.body.appendChild(feedback);
    console.log(numAnswers)
}

//USE DATASET OBJECT WHEN ADDING VALUES TO BUTTONS


//assign every possible answer an index, and then randomize the index so that they 'never' appear in the same order twice. Possibly build the indeces before and then reassign them using random numbers.

//Series of User Events ----------------------------------------------------------

start.addEventListener('click', function () {
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    clearStart();
    startQuestions();
    //  nextQuestion();
});
//correctAnswer.addEventListener('click', function())