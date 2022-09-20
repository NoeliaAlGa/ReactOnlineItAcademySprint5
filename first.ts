
const API_URL = 'https://icanhazdadjoke.com';

const request = { 
    method: "GET",
    headers: {
        "Accept": "application/json"
      },
}

const API_URL_JOKES_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';

const API_URL_ELTIEMPO = 'https://api.openweathermap.org/data/2.5/weather?lat=41.56667&lon=2.01667&appid=85cfa2c7d7ecfaba7ec9e19c3e057d04&units=metric';

let actualJoke;
const reportAcudits = [];
let tempsActualTerrassa = "";

function nextJoke() {
    let numRandom : number = Math. ceil(Math.random() * (100 - 1 + 1) + 1);
    let numRandomFondo: number = Math.ceil(Math.random() * 4);
    
    const jokeText :  HTMLElement | null = document.getElementById("apiText");
    const htmlFons :  HTMLElement | null = document.getElementById("fotoBackground");

    //numRandom canvi Acudit
    if(numRandom % 2 === 0 && jokeText !== null && jokeText !== undefined) {
        randomJoke(API_URL_JOKES_CHUCKNORRIS);
    }
    else {
        randomJoke(API_URL);
    }

    //numRandom canvi fons
    if(numRandomFondo === 1 && htmlFons !== null) {
        htmlFons.style.backgroundImage =  'url("./img/blob lila.svg")';
    }
    else if(numRandomFondo === 2 && htmlFons !== null) {
        htmlFons.style.backgroundImage =  'url("./img/blob coral.svg")';
    }
    else if(numRandomFondo === 3 && htmlFons !== null) {
        htmlFons.style.backgroundImage =  'url("./img/blob azul.svg")';
    }
    else {
        htmlFons.style.backgroundImage = 'url("./img/blob rosa.svg")';
    }
}

async function randomJoke(url : string) {
    const jokeText :  HTMLElement | null = document.getElementById("apiText");
    
    const response = await fetch(url, request);
    const jsonJoke = await response.json();

    if(url === API_URL) {
        jokeText.textContent = `"${jsonJoke.joke}"`;
        actualJoke = jsonJoke.joke; 
    }
    else {
        jokeText.textContent = `"${jsonJoke.value}"`;
        actualJoke = jsonJoke.value;
    }
    
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
            let nomImatgeTemps = "";

            if(tempsActualTerrassa === "Clouds") {
                nomImatgeTemps = "./img/sol y nuves.png";
            }
            else if(tempsActualTerrassa === "Sun") {
                nomImatgeTemps = "./img/sol.png";
            }
            else {
                nomImatgeTemps = "./img/lluvia.png";
            }

            textElTempsActual.innerHTML = `<img src="${nomImatgeTemps}">| ${elTempsTerrassa[0].main.temp}°C`; 

        })
    
}
