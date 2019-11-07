//arrow function

let stampa2 = function(){
    console.log('ciao');
}

stampa2();

let stampa = () => { console.log('ciao')}
stampa();

//arrow con argomenti
let valori = [1,2,3];
let raddoppia = (n)=>n*2;
//map
let raddoppiati = valori.map((n)=>n*2);
let triplicati = valori.map((n)=>n*3);
console.log(triplicati);
//filter
let voti = [24,26,28,30,18];
let venticinqui = voti.filter(n=>n>=25);
console.log(venticinqui);

//manipolazione stringhe
let lunghissimo = 'shinin'+'g'.repeat(15);
console.log(lunghissimo);
console.log('xiang'.startsWith('xi'));



