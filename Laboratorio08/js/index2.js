/**  IIFE Immediately invoked function Expression */

let contatore = (function () {

    let conteggio = 0;
    return function () {
        return `Il valore del conteggio è: ${conteggio++}`
    }
    console.log(7);
})();

console.log(contatore());
console.log(contatore());
console.log(contatore());
console.log(contatore());
console.log(contatore());

(function () {
    console.log("IIFE funge")
})();
