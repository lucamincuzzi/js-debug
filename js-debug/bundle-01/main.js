/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

console.log("Esercizio 1:");
// ESERCIZIO 1
// Questo codice è un ciclo for che stampa in console il numero in iterazione
// Tuttavia, non avviene nulla in quanto la condizione è già false in partenza, perciò l'istruzione di stampa in console non avviene neanche una volta
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("Esercizio 2:");
// ESERCIZIO 2
//Questa è una funzione che prende come parametro un numero e se questo è pari, ovvero se diviso per 2 non dà resto, gli aggiunge 5 e lo restituisce.
//L'errore è sintattico in quanto il confronto d'identità necessita del triplo =
console.log(addIfEven(2), addIfEven(3));
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

console.log("Esercizio 3:");
// ESERCIZIO 3
//Similarmente al primo esercizio, questa è una funzione che applica lo stesso ciclo visto prima; quindi invocandola si ottiene una stampa in console del numero in iterazione fino a 5
//L'errore è sintattico in quanto nel ciclo for l'index, la condizione e l'incremento/decremento vanno separati dal punto e virgola, non la virgola
console.log(loopToFive());
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

console.log("Esercizio 4:");
// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
//Il primo errore è logico: la funzione dovrebbe prendere un array di numeri in ingresso per poterne poi restituire un altro con solo numeri pari, ma la definizione di tale funzione non include parametri e tra l'altro l'array originale dovrebbe provenire dall'esterno o essere comunque provveduto da un'altra funzione che agisce sullo stesso livello di scope.
//Il secondo errore è logico: la condizione dovrebbe confrontare l'indice utilizzando la lunghezza dell'array senza sottrarrle 1
//Il terzo errore è sintattico: dopo l'incremento c'è un punto e virgola
//Il quarto errore è sintattico: il confronto d'identità si esegue col triplo uguale
//Il quinto è logico: il confronto deve avvenire con l'elemento dell'array originale nella posizione iesima
//Il sesto è logico: l'elemento da pushare nel nuovo array dev'essere l'elemento dell'array originale nella posizione iesima
//Il settimo è logico: la restituzione deve avvenire al di fuori del ciclo, allo scope della funzione
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function displayEvenNumbers(array) {
    let evenNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        
    }
    return evenNumbers;
}
console.log(displayEvenNumbers(numbers)); // dovrebbe restituire [2,4,6,8]