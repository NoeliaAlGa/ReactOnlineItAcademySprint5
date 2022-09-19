var API_URL = 'https://icanhazdadjoke.com';
var request = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
var API_URL_ELTIEMPO = 'https://api.openweathermap.org/data/2.5/weather?lat=41.56667&lon=2.01667&appid=85cfa2c7d7ecfaba7ec9e19c3e057d04';
var actualJoke = "";
var reportAcudits = [];
var tempsActualTerrassa = "";
function nextJoke() {
    var jokeText = document.getElementById("apiText");
    fetch(API_URL, request)
        .then(function (response) { return response.json(); })
        .then(function (jokes) {
        var tpl = jokes;
        actualJoke = tpl.joke;
        jokeText.textContent = "\"".concat(actualJoke, "\"");
    });
}
function jokeNote(note) {
    var data = new Date();
    var dataISO = data.toISOString();
    var jokesNotes = {
        joke: actualJoke,
        score: note,
        date: dataISO
    };
    reportAcudits.push(jokesNotes);
    console.log(reportAcudits);
}
function elTiempo() {
    var textElTempsActual = document.getElementById('elTemps');
    var elTempsTerrassa = [];
    fetch(API_URL_ELTIEMPO)
        .then(function (response) { return response.json(); })
        .then(function (tempsTerrassa) {
        elTempsTerrassa.push(tempsTerrassa);
        tempsActualTerrassa = elTempsTerrassa[0].weather[0].main;
        textElTempsActual.textContent = "elTemps| ".concat(tempsActualTerrassa);
    });
}
