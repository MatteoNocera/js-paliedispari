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

const userWord = prompt('type your word');

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


/* function divideWord(word) {

    for (let i = 0; i < userWord.length / 2; i++) {
        let letter = userWord[i];
        console.log(letter);
        
    }

    for (let i = userWord.length - 1; i >= userWord.length / 2; i--) {
        let letter = userWord[i];
        console.log(letter);
        
    }

    

} 

const result = divideWord(userWord) */



function check(user_Word) {

    let verify = true;

    for (let i = 0; i < userWord.length; i++) {

        let letter1 = userWord[i];

        let letter2 = userWord[userWord.length - (i + 1)];

        console.log(letter1 + letter2);

        if (letter1 !== letter2) {

            verify = false;
        }
    }

    return verify;
}

const result = check(userWord);

const h1Element = document.querySelector('h1');

console.log(userWord);

if (check(userWord)) {
    console.log('La parola inserita è palindroma');
    h1Element.insertAdjacentHTML('beforeend', `La tua parola è ${userWord} ed è palindroma` );

} else {
    console.log('La parola inserita non è palindroma');
    h1Element.insertAdjacentHTML('beforeend', `La tua parola è ${userWord} e non è palindroma` );
}

