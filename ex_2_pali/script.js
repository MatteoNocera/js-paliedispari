/*
👉  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma


* Tools
- prompt
- let/const
- console.log
- function
- if/else

*/

// Chiedere all’utente di inserire una parola

const userWord = 'ciao' //prompt('type your word');

// Creare una funzione per capire se la parola inserita è palindroma


/* for (let i = 0; i < userWord.length; i++) {
    const letter = userWord[i];
    console.log(letter);

}




for (let i = userWord.length - 1; i >= 0; i--) {
    const letterReverse = userWord[i];
    console.log(letterReverse);

    console.log(userWord.length);

}
 */


function divideWord(word) {

    for (let i = 0; i < userWord.length / 2; i++) {
        const letter = userWord[i];
        console.log(letter);
        
    }

    for (let i = userWord.length - 1; i >= userWord.length / 2; i--) {
        const letter = userWord[i];
        console.log(letter);
        
    }

}

const result = divideWord(userWord)
