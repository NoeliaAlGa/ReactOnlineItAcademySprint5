var API_URL = 'https://icanhazdadjoke.com';
var request = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
var actualJoke = "";
var reportAcudits = [];
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
