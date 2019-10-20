//Assigning Referencs ----------------------------------------------------
var time = document.querySelector('#timer');
var start = document.querySelector('#startQuiz');
var homeScreen = document.querySelector('#homeScreen');
var choicesDiv = document.querySelector('#choices');
var qPrompts = document.querySelector('#prompts');
var qTitle = document.querySelector('#qTitle');
var qFeedback = document.querySelector('#feedback');
var feedbackDiv = document.querySelector('#feedbackDiv');

//Global variables
var timeTotal = questions.length * 15; //total time the quiz will run for
time.textContent = timeTotal;
var qCurrent = 0; // current question the quiz is referencing
var highscores = [];

//Functions ----------------------------------------------------------------------------------------

function timerStart() {
    
    var timerInterval = setInterval(function () {
        if (timeTotal === 0 || (qCurrent >= questions.length)) {
            clearInterval(timerInterval);
            quizComplete();
        } else{
            timeTotal--;
            time.textContent = timeTotal;
        }
    }, 1000);
}

function nextQuestion() {
    
    if (qCurrent >= questions.length){ //stops nextQuestion from running when there is no question data
        return;
    }
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

    //Adding Event Listeners for Buttons within the nextQuestion function (buttons don't exist until this function is run)
   qButtons = document.querySelectorAll('[data-type]');

   qButtons.forEach(choice => {
       choice.addEventListener('click', function(event){
            checkAnswer();
            qCurrent++;
            nextQuestion();
           });
       });
   };


function checkAnswer() {

    if (event.target.textContent === questions[qCurrent].answer){
     qFeedback.textContent = 'Correct!';
    } else{
        qFeedback.textContent = 'Wrong!';
        if (timeTotal > 15){
        timeTotal = timeTotal - 15;
        } else {
            timeTotal = 0;
            time.textContent = timeTotal;
        }
    }
    setTimeout(function(){ qFeedback.textContent = ''} , 1000);

};

function quizComplete(){

    time.textContent = timeTotal;
    var score = timeTotal;
    choicesDiv.innerHTML = ''; //removing buttons from last question run
    qTitle.textContent = 'Quiz Complete'
    qTitle.setAttribute('class', 'col-md-12 text-center');
    var scoreReport = document.createElement('p');
    scoreReport.setAttribute('class', 'col-md-12 text-center');
    choicesDiv.appendChild(scoreReport);
    scoreReport.textContent = 'Your Score is: ' + score + '!';

    var nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'row form-group');
    nameDiv.setAttribute('id', 'nameDiv');
    prompts.insertBefore(nameDiv, feedbackDiv);

    var nameInputEl = document.createElement('input');
    nameInputEl.setAttribute('class', 'form-control');
    nameInputEl.setAttribute('id', 'userName');
    nameInputEl.setAttribute('placeholder','Enter Your Name!');
    nameDiv.appendChild(nameInputEl);

    var submitScoreEl = document.createElement('button');
    submitScoreEl.setAttribute('type', 'submit');
    submitScoreEl.setAttribute('id', 'submitScore');
    submitScoreEl.setAttribute('class', 'btn btn-success my-2');
    submitScoreEl.textContent = 'Submit Your Score!';
    nameDiv.appendChild(submitScoreEl);


    var submitScore = document.querySelector('#submitScore');

submitScore.addEventListener('click', function(){
    var currentScore = {
        userName: nameInputEl.value,
        score: score
    };

    console.log(currentScore);
    var highscoresJSON = localStorage.getItem('highscores');
    highscores = JSON.parse(highscoresJSON);

    //highscores.push(currentScore);
    //highscoresJSON = JSON.stringify(highscores);
    //localStorage.setItem('highscores', highscoresJSON);

    nameInputEl.value = '';

    });


}

// Starting the Quiz--------------

start.addEventListener('click', function () {
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    homeScreen.parentNode.removeChild(homeScreen); //aight imma head out
    nextQuestion();
    });
