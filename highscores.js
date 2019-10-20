// Assigning References -------------------------------------------
var tableInfoEl = document.querySelector('#tableInfo');
var clearScores = document.querySelector('#clearScores');
var quizReturn = document.querySelector('#quizReturn');

// var quizReturn = document.querySelector('#quizReturn');


// Globals
var highscoresJSON = localStorage.getItem('highscores')
if (highscoresJSON){
   var  highscores = JSON.parse(highscoresJSON);
    x = 0;
} else {
   var highscores = [];
    x = 1; // indentifier for when the highscores array is being created for the first time
}

// Building Highscores table ----------------------------------------------------------

function buildScores(){

    tableInfoEl.innerHTML = '';
    console.log('hello');
   /*
    for (var i = 0; i < highscores ; i++) { 
        var qChoices = document.createElement('buttons');


        choicesDiv.appendChild(qChoices);
        qChoices.setAttribute('data-type', 'choice');
        qChoices.setAttribute('type','submit');
        qChoices.setAttribute('class','col-md-6 d-block text-center btn-primary rounded m-2 p-2');
        qChoices.textContent = questions[qCurrent].choices[i];
    }
    */
};

// Click Events -------------------------

clearScores.addEventListener('click', function(e){
    e.preventDefault();
    if(confirm("You're About to Delete Your HighScores! Continue?")){
        highscores = [];
        localStorage.setItem('highscores',highscores);
        buildScores();
    };
});

quizReturn.addEventListener('click',function(e){
    e.preventDefault();
    window.location = 'index.html';
})
