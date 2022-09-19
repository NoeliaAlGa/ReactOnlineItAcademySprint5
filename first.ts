
const API_URL = 'https://icanhazdadjoke.com';

const request = { 
    method: "GET",
    headers: {
        "Accept": "application/json"
      },
}

const API_URL_JOKES_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';

const API_URL_ELTIEMPO = 'https://api.openweathermap.org/data/2.5/weather?lat=41.56667&lon=2.01667&appid=85cfa2c7d7ecfaba7ec9e19c3e057d04';

let actualJoke:string = "";
const reportAcudits = [];
let tempsActualTerrassa = "";

function nextJoke() {
    let numRandom : number = Math. ceil(Math.random() * (100 - 1 + 1) + 1);
    const jokeText = document.getElementById("apiText");

    if(numRandom % 2 === 0) {
        const chuckJoke:string = randomChuckNorrisJoke();
        jokeText.textContent = `"${chuckJoke}"`;
    }
    else {
        const generalJoke : string = randomJoke();
        jokeText.textContent = `"${generalJoke}"`;
    }
}

function randomJoke() {
    fetch(API_URL, request)
    .then((response) => response.json())
    .then((jokes) => {
        const tpl= jokes;
        actualJoke = tpl.joke;
    })
    return actualJoke;
}

function randomChuckNorrisJoke() {
    fetch(API_URL_JOKES_CHUCKNORRIS)
    .then((response) => response.json())
    .then((joke) => {
        const jcn= joke;
        actualJoke = jcn.value;
    })
    return actualJoke;
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

function elTiempo() {
    const textElTempsActual = document.getElementById('elTemps');
    const elTempsTerrassa : any = [];
    fetch(API_URL_ELTIEMPO)
        .then((response) => response.json())
        .then((tempsTerrassa) => {
            elTempsTerrassa.push(tempsTerrassa);
 
            tempsActualTerrassa = elTempsTerrassa[0].weather[0].main;
            textElTempsActual.textContent = `elTemps| ${tempsActualTerrassa}`;
              
    })
    
}