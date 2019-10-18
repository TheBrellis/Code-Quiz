//Assigning Referencs and Importing Questions----------------------------------------------------
var time = document.querySelector('#timer');
var start = document.querySelector('#startQuiz');
var homeScreen = document.querySelector('#homeScreen');
var choicesDiv = document.querySelector('#choices');

// pretty sure this query call is broken-------------
var qButtons = document.querySelectorAll('{data-type: choice}')
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

function clearStart() { 
    //method for removing node found on https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    var wipe = homeScreen.cloneNode(false); //creates an idential node that is false (blank)
    homeScreen.parentNode.replaceChild(wipe, homeScreen); // swaps the origional node for the blank node
};

function nextQuestion() {

    var numChoices = questions[qCurrent].choices.length;  //adding a variable to determine number of buttons needed for answers, could loop this for varying number of answers. Would require this function be recalled for every question. 
    
    for (var i = 0; i < numChoices ; i++) { // Looping through all of the questions to build the correct number of buttons and storing them with the corect index
        var qChoices = document.createElement('buttons');
        choicesDiv.appendChild(qChoices);
        qChoices.setAttribute('data-index', i); //may not need this?
        qChoices.setAttribute('data-type', 'choice');
        qChoices.setAttribute('type','submit')
        qChoices.setAttribute('class','col-md-12')
        qChoices.textContent = questions[qCurrent].choices[i];
    }
    qTitle.textContent = questions[qCurrent].title;

};

function checkAnswer() {
    var feedbackInterval = setInterval(function(event) {
        // if the value of the target that is clicked equals the value presented in the answer key
        if (event.target.value === question[qCurrent].answer.value){
            qFeedback.textContent = 'Correct!'; //change text content of feedback to correct
            return;
        }
        qFeedback.textContent = 'False you fail!';
        timeTotal = timeTotal - 15;

        }, 3000);

        return timeTotal;
};

//USE DATASET OBJECT WHEN ADDING VALUES TO BUTTONS

/*Commit notes
- updated nextQuestion() to include the title of the current question
- created click event for all of the button with data-index 'choice'
- click event calls for the answer to be checked (checkAnswer() created) then moves on to the next questions

*/


//Series of User Events ----------------------------------------------------------

start.addEventListener('click', function () {
    timerStart(); //method for calling multiple functions with a single event listener found on https://stackoverflow.com/questions/25028853/addeventlistener-two-functions
    clearStart();
    nextQuestion();
});

//assign an event for clicking any buttons, checks values, then gives feedback (for breif amount of time) and applys awards/penalties to counter, clears choicesDiv, then runs the nextQuestion
qButtons.addEventListener('click', function(event) {
    checkAnswer();
    nextQuestion();
});

