//Assigning Referencs ----------------------------------------------------
var time = document.querySelector('#timer');
var start = document.querySelector('#startQuiz');
var homeScreen = document.querySelector('#homeScreen');
var choicesDiv = document.querySelector('#choices');
var qPrompts = document.querySelector('#prompts');
var qTitle = document.querySelector('#qTitle');
var qFeedback = document.querySelector('#feedback');
var results = document.querySelector('#results');
//Global variables
var timeTotal = 5// questions.length * 15; //total time the quiz will run for
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
        , 100);
}

function nextQuestion() {
    qPrompts.setAttribute('class', 'container jumbotron col-md-8 my-4 py-2')
    // removes buttons from previous question
    choicesDiv.innerHTML = '';
    var numChoices = questions[qCurrent].choices.length;  
    //building new buttons
    for (var i = 0; i < numChoices ; i++) { 
        var qChoices = document.createElement('buttons');
        choicesDiv.appendChild(qChoices);
        qChoices.setAttribute('data-type', 'choice');
        qChoices.setAttribute('type','submit');
        qChoices.setAttribute('class','col-md-6 d-block text-center btn-primary rounded m-2 p-2');
        qChoices.textContent = questions[qCurrent].choices[i];
    }
    qTitle.textContent = questions[qCurrent].title;
  //  updated eventListener in nextQuestion function to checkAnswer(), iterate qCurrent, and run nextQuestio
    //n. checkAnswer now gives feedback for 1 seconds and then disappears. 
    //Adding Event Listeners for Buttons within the nextQuestion function (buttons don't exist until this function is run)
   qButtons = document.querySelectorAll('[data-type]');
   qButtons.forEach(choice => {
       choice.addEventListener('click', function(event){
           checkAnswer();
           qCurrent++;
           nextQuestion();
       })
   })
};

function checkAnswer() {
    //gives feedback from previous answer and applies penalty if needed

 //   setInterval(function(){ //set interval example per the Speed Reader Class Activity
    if (event.target.textContent === questions[qCurrent].answer){
     qFeedback.textContent = 'Correct!';
    } else{
        qFeedback.textContent = 'Wrong!';
        timeTotal = timeTotal - 15;
    }
    setTimeout(function(){
        qFeedback.textContent = '';
    },1000);
};

function quizComplete(){

    choicesDiv.innerHTML = ''; //removing buttons that may exist
    qTitle.textConent = 'Quiz Complete!'

    var scoreReport = document.createElement('p');
    choicesDiv.appendChild(scoreReport);
    scoreReport.textContent = 'Your Score is: ' + timeTotal + '!';

    var initials = document.createElement('form',{id: 'initials', class: 'col-md-6'});
    initials.textContent = 'Your Name Here:'
    var submitScore = document.createElement('button',{type: 'submit', id: 'submitScore', class: 'btn-success p-2 col-md-3 rounded'});
    submitScore.textConent = 'Submit Score!';
    results.appendChil(initials);
    results.appendChild(submitScore);

}
    

//USE DATASET OBJECT WHEN ADDING VALUES TO BUTTONS


//Series of User Events ----------------------------------------------------------

start.addEventListener('click', function () {
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    homeScreen.parentNode.removeChild(homeScreen); //aight imma head out
    nextQuestion();
    });


//assign an event for clicking any buttons, checks values, then gives feedback (for breif amount of time) and applys awards/penalties to counter, clears choicesDiv, then runs the nextQuestion

