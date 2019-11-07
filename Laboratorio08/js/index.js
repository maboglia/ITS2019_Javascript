/**       variable scope         */

//dichiaro due fun
/*
function f1(){
    console.log("sono la funzione 1");
}

function f2(){
    console.log("sono la funzione 2");
}
f1();
f2();
f1();
//console.log(x)
*/
/*
//3
const x = 5;

function f(){
    console.log(x);
    console.log(y);
}

const y = 6;
f();

*/

/**
 * global e block scope
 */

// var nome = "carlo";
// var matricola = 4;

// function saluta() {
//     nome = "giovanni";
//     document.write(`${nome} saluta tutti!
//     può estendersi tranquillamente su diverse
//     righe
//     `);
// }

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log(i);
// saluta();

console.log("sono prima del block");
{
    const PIPPO = "paperino";
    console.log(`sono dentro al block ${PIPPO}`);
}
console.log("sono dopo il block");
console.log(PIPPO);
