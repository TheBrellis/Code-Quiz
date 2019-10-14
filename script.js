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

function timerStart (){
time.textContent = timeTotal;
var timerInterval = setInterval( function(){
    if (timeTotal === 0){
      return;
    } else {
    timeTotal--;
    time.textContent = timeTotal;
    }
}
, 100);
}

function clearStart () { //method for removing node found on https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    var wipe = homeScreen.cloneNode(false); //creates an idential node that is false (blank)
    homeScreen.parentNode.replaceChild(wipe, homeScreen); // swaps the origional node for the blank node
};




//Event Listeners   ----------------------------------------------------------
start.addEventListener('click', function(){
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    clearStart();
  //  nextQuestion();
});