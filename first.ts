
const API_URL = 'https://icanhazdadjoke.com';

const request = { 
    method: "GET",
    headers: {
        "Accept": "application/json"
      },
}

function nextJoke() {
    fetch(API_URL, request)
        .then((response) => response.json())
        .then((jokes) => {
            const tpl= jokes;
            console.log(`Següent acudit: ${tpl.joke}`);
    })
}