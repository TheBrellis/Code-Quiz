// Assigning References -------------------------------------------
var scoresTableDiv = document.querySelector('#scoresTable');
// var quizReturn = document.querySelector('#quizReturn');
var clearScores = document.querySelector('#clearScores');

// Globals
var highscoresJSON = localStorage.getItem('highscores')
highscores = JSON.parse(highscoresJSON);

// Sorting the highScores from largest to smallest


function buildScores(){

    scoresTableDiv.innerHTML = '';
   
    for (var i = 0; i < highscores ; i++) { 
        var qChoices = document.createElement('buttons');

        
        choicesDiv.appendChild(qChoices);
        qChoices.setAttribute('data-type', 'choice');
        qChoices.setAttribute('type','submit');
        qChoices.setAttribute('class','col-md-6 d-block text-center btn-primary rounded m-2 p-2');
        qChoices.textContent = questions[qCurrent].choices[i];
    }
};
*/
// Click Events -------------------------

clearScores.addEventListener('click', function(){
    
});
