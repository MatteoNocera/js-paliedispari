/* 

👉 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*tools
- prompt
- let/const
- math.flor/ciel - random
- function
- if/else
- %
- console.log

*/


// chiedi all'utente pari o dispari

const userChoise = prompt('Scegli : pari o dispari');

if (userChoise !== 'pari' && userChoise !== 'dispari') {
    
    alert('inserisci solo pari o dispari');
    location.reload();
}

console.log(userChoise);

// chiedi all'utente un numero da 1 a 5

const userNumber = Number(prompt('scegli un numero da 1 a 5'));

if (isNaN(userNumber)) {
    alert('inserisci solo un numero da 1 a 5');
    location.reload();
}

console.log(userNumber);

// crea un numero random da 1 a 5 per il pc con una function

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const pcNumber = randomNumber(1, 5);

console.log(pcNumber);

// somma i due numeri usando una function

function somma(num1, num2) {
    
    return num1 + num2;
}

const sommaNumeri = somma(userNumber, pcNumber);

console.log(sommaNumeri);

// stabilisci se la somma è pari o dispari

function isEven(number_result) {
    if (sommaNumeri % 2 === 0) {
        return true;
    }

    return false;
}

const result = isEven(sommaNumeri);

let theWinnerIs = '';

if (result) {
    theWinnerIs = 'pari';
} else {
    theWinnerIs = 'dispari';
}

console.log(theWinnerIs);

// decreta e stampa il vincitore

const h1Element = document.querySelector('h1');

let finalResult = ''

if (userChoise === theWinnerIs) {
    
    let finalResult = 'USER WIN';
    console.log(finalResult);
    h1Element.innerHTML = finalResult;


} else {
    let finalResult = 'USER LOOSE';
    console.log(finalResult);
    h1Element.innerHTML = finalResult;

}


