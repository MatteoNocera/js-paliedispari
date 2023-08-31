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

console.log(userChoise);

// chiedi all'utente un numero da 1 a 5

const userNumber = Number(prompt('inserisci un numero da 1 a 5'));

console.log(userNumber);

// crea un numero random da 1 a 5 per il pc

const pcNumber = Math.floor(Math.random() * 5 + 1);

console.log(pcNumber);

// somma i due numeri

const sommaNumeri = userNumber + pcNumber;

console.log(sommaNumeri);

// stabilisci se la somma è pari o dispari

if (sommaNumeri % 2 === 0) {
    console.log('pari');
} else {
    console.log('dispari');
}

// stampa il vincitore

