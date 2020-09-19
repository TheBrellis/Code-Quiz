// Assigning References -------------------------------------------
var tableInfoEl = document.querySelector('#tableInfo');
var clearScores = document.querySelector('#clearScores');
var quizReturn = document.querySelector('#quizReturn');

// Globals ---------------------------------------------
var highscoresJSON = localStorage.getItem('highscores')
if (highscoresJSON) {
    var highscores = JSON.parse(highscoresJSON);
} else {
    var highscores = [];
}

// Building Highscores table ----------------------------------------------------------
buildScores();

function buildScores() {

    tableInfoEl.innerHTML = '';

    for (var i = 0; i < highscores.length; i++) {

        var rowEl = document.createElement('tr');
        tableInfoEl.appendChild(rowEl);

        var indexEl = document.createElement('th');
        rowEl.appendChild(indexEl);
        indexEl.setAttribute('scope', 'row');
        indexEl.textContent = i + 1;

        var userEl = document.createElement('td');
        rowEl.appendChild(userEl);
        userEl.textContent = highscores[i].userName;

        var scoreEl = document.createElement('td');
        rowEl.appendChild(scoreEl);
        scoreEl.textContent = highscores[i].score;
    }
};

// Click Events -------------------------

clearScores.addEventListener('click', function (e) {
    e.preventDefault();
    if (confirm("You're About to Delete Your Highscores! Continue?")) {
        highscores = [];
        localStorage.setItem('highscores', highscores);
        buildScores();
    };
});

quizReturn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location = 'index.html';
})
