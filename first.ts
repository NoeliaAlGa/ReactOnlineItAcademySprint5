
const API_URL = 'https://icanhazdadjoke.com';

const request = { 
    method: "GET",
    headers: {
        "Accept": "application/json"
      },
}

let actualJoke:string = "";
const reportAcudits = [];

function nextJoke() {
    const jokeText = document.getElementById("apiText");
    fetch(API_URL, request)
        .then((response) => response.json())
        .then((jokes) => {
            const tpl= jokes;
            actualJoke = tpl.joke;
            jokeText.textContent = `"${actualJoke}"`;
    })
}

function jokeNote(note) {
    const data = new Date();
    let dataISO = data.toISOString();

    const jokesNotes = {
        joke: actualJoke,
        score: note,
        date: dataISO
    }
      
    reportAcudits.push(jokesNotes);
    console.log(reportAcudits);
}