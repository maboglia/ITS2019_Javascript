
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true, false, 'ciao'];

enum Taglie { MEDIUM = 44, SMALL = 40, LARGE = 50 };
console.log(Taglie.MEDIUM);

var scrivi = (messaggio) =>console.log(messaggio.toUpperCase());

scrivi("ciao");
