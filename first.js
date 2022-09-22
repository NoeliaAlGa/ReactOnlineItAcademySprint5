var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var API_URL = 'https://icanhazdadjoke.com';
var request = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
var API_URL_JOKES_CHUCKNORRIS = 'https://api.chucknorris.io/jokes/random';
var API_URL_ELTIEMPO = 'https://api.openweathermap.org/data/2.5/weather?lat=41.56667&lon=2.01667&appid=85cfa2c7d7ecfaba7ec9e19c3e057d04&units=metric';
var actualJoke;
var reportAcudits = [];
var tempsActualTerrassa = "";
function nextJoke() {
    var numRandom = Math.ceil(Math.random() * (100 - 1 + 1) + 1);
    var numRandomFondo = Math.ceil(Math.random() * 4);
    var emojibtn = document.getElementById("btnEmojis");
    var jokeText = document.getElementById("apiText");
    var htmlFons = document.getElementById("fotoBackground");
    emojibtn.style.display = "inline";
    //numRandom canvi Acudit
    if (numRandom % 2 === 0 && jokeText !== null && jokeText !== undefined) {
        randomJoke(API_URL_JOKES_CHUCKNORRIS);
    }
    else {
        randomJoke(API_URL);
    }
    //numRandom canvi fons
    if (numRandomFondo === 1 && htmlFons !== null) {
        htmlFons.style.backgroundImage = 'url("./img/blob lila.svg")';
    }
    else if (numRandomFondo === 2 && htmlFons !== null) {
        htmlFons.style.backgroundImage = 'url("./img/blob coral.svg")';
    }
    else if (numRandomFondo === 3 && htmlFons !== null) {
        htmlFons.style.backgroundImage = 'url("./img/blob azul.svg")';
    }
    else {
        htmlFons.style.backgroundImage = 'url("./img/blob rosa.svg")';
    }
}
function randomJoke(url) {
    return __awaiter(this, void 0, void 0, function () {
        var jokeText, response, jsonJoke;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jokeText = document.getElementById("apiText");
                    return [4 /*yield*/, fetch(url, request)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonJoke = _a.sent();
                    if (url === API_URL) {
                        jokeText.textContent = "\"".concat(jsonJoke.joke, "\"");
                        actualJoke = jsonJoke.joke;
                    }
                    else {
                        jokeText.textContent = "\"".concat(jsonJoke.value, "\"");
                        actualJoke = jsonJoke.value;
                    }
                    return [2 /*return*/];
            }
        });
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
        var nomImatgeTemps = "";
        if (tempsActualTerrassa === "Clouds") {
            nomImatgeTemps = "./img/sol y nuves.png";
        }
        else if (tempsActualTerrassa === "Sun") {
            nomImatgeTemps = "./img/sol.png";
        }
        else {
            nomImatgeTemps = "./img/lluvia.png";
        }
        textElTempsActual.innerHTML = "<img src=\"".concat(nomImatgeTemps, "\">| ").concat(elTempsTerrassa[0].main.temp, "\u00B0C");
    });
}
