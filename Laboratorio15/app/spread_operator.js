//spread operator ...

let a = [2,3,4];
let b = [1,...a,5];
console.log(b);

//rest parameter
function calcolaMedia(...voti){
    console.log(voti);
}
calcolaMedia(18,23,25,26,28,25,26);