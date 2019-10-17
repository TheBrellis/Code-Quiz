//Assigning Referencs and Importing Questions----------------------------------------------------
var time = document.querySelector('#timer');
var start = document.querySelector('#startQuiz');
var homeScreen = document.querySelector('#homeScreen');
var choicesDiv = document.querySelector('#choices');

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

function clearStart() { 
    //method for removing node found on https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    var wipe = homeScreen.cloneNode(false); //creates an idential node that is false (blank)
    homeScreen.parentNode.replaceChild(wipe, homeScreen); // swaps the origional node for the blank node
};

function nextQuestion() {

    var numChoices = questions[qCurrent].choices.length;  //adding a variable to determine number of buttons needed for answers, could loop this for varying number of answers. Would require this function be recalled for every question. 
    for (var i = 0; i < numChoices ; i++) { // Looping through all of the questions to build the correct number of buttons and storing them with the corect index
        var btns = document.createElement('buttons');
        choicesDiv.appendChild(btns);
        btns.setAttribute('data-index', i);
        btns.setAttribute('data-type', 'choice');
        btns.setAttribute('type','submit')
        btns.setAttribute('')
        btns.textContent = questions[qCurrent].choices[i];
    }

}

//USE DATASET OBJECT WHEN ADDING VALUES TO BUTTONS




//Series of User Events ----------------------------------------------------------

start.addEventListener('click', function () {
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    clearStart();
    nextQuestion();
});

//assign an event for clicking any buttons, checks values, then gives feedback (for breif amount of time) and applys awards/penalties to counter, clears choicesDiv, then runs the nextQuestion
