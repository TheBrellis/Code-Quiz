//Assigning Referencs ----------------------------------------------------
var time = document.querySelector('#timer');
var start = document.querySelector('#startQuiz');
var homeScreen = document.querySelector('#homeScreen');
var choicesDiv = document.querySelector('#choices');
var qPrompts = document.querySelector('#prompts');
var qTitle = document.querySelector('#qTitle');
var qFeedback = document.querySelector('#feedback');

//Global variables
var timeTotal = questions.length * 15; //total time the quiz will run for
var qCurrent = 0; // current question the quiz is referencing
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

function nextQuestion() {

    qPrompts.setAttribute('class', 'container jumbotron my-4')
    var numChoices = questions[qCurrent].choices.length;  
    
    //building buttons for the choices
    for (var i = 0; i < numChoices ; i++) { 
        var qChoices = document.createElement('buttons');
        choicesDiv.appendChild(qChoices);
        qChoices.setAttribute('data-type', 'choice');
        qChoices.setAttribute('type','submit')
        qChoices.setAttribute('class','col-md-6 btn-primary text-center m-2 p-2 ')
        qChoices.textContent = questions[qCurrent].choices[i];
    }
    qTitle.textContent = questions[qCurrent].title;

    //Adding Event Listeners for Buttons within the nextQuestion function (buttons don't exist until this function is run)
   qButtons = document.querySelectorAll('[data-type]');
   qButtons.forEach(choice => {
       choice.addEventListener('click', function(event){
           checkAnswer(event);
       })
   })
};

function checkAnswer(event) {

    var feedbackInterval = setInterval(function() {
        // if the value of the target that is clicked equals the value presented in the answer key
        if (event.target.value === questions[qCurrent].answer.value){
          //  qFeedback.textContent = 'Correct!'; //change text content of feedback to correct
            return;
        }
        qFeedback.textContent = 'False you fail!';
        timeTotal = timeTotal - 15;
        }, 3000);
/*
if (qCurrent === (questions.length-1) || timeTotal <= 0){
  //  prompts.parentNode.removeChild(prompts);
  //  enterScore();
}
nextQuestion();
*/
};

//USE DATASET OBJECT WHEN ADDING VALUES TO BUTTONS


//Series of User Events ----------------------------------------------------------

start.addEventListener('click', function () {
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    homeScreen.parentNode.removeChild(homeScreen);
    nextQuestion();
    });


//assign an event for clicking any buttons, checks values, then gives feedback (for breif amount of time) and applys awards/penalties to counter, clears choicesDiv, then runs the nextQuestion

