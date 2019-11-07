/*
	const saluto = "ciao";
		//saluto = "buongiorno";
		//saluto = true;
		// saluto = 5 * 5;
	//document.write(typeof saluto);
*/
/*
	//operazioni aritmetiche
	var a = 5;
	var b = 10;
	var c = (a + b) * b / a - b; 

	document.write(c);
*/

	//operatori logici e di comparazione
	// > >= == === 
	/*
	var a = 5;
	var b = "5";
	//
	document.write(typeof a);
	document.write(typeof b);
	var c= a * b;
	document.write(c);

	if (a === b){
		document.write("frase a");
	}
	*/
	//assegnare, concatenare
//	var a = 5;
//	if (a = 7) document.write("frase a");
	/*
	var a = 4;
	var b = 4;
	var d = "GATTI";
	var c = "" + a + b + d;
	document.write(c);	
	*/
//funzione senza parametri e senza valore di ritorno
	function stampaTabellina(){
		document.writeln("<table style='border:1px solid #ccc'>" );	
			for (var i = 1; i < 11; i++) {
			document.writeln("<tr>" );

				for (var j = 1; j < 11; j++) {
					document.writeln("<td  style='border:1px solid #c00'>" + (i * j) + "</td>" );
				}
			
			document.writeln("</tr>" );		
			}
		document.writeln("</table>" );	
	}
//stampaTabellina();

//funzioni con parametri e valore di ritorno
/* 
function addizione(a, b) {
	let c = a + b;
	console.log("qui vi parla la funzione addizione");
	return c;
}
function sottrazione(a, b) {
	let c = a - b;
	console.log("qui vi parla la funzione sottrazione");
	return c;
}
function moltiplicazione(a, b) {
	let c = a * b;
	console.log("qui vi parla la funzione moltiplicazione");
	return c;
}
function divisione(a, b) {
	let c = a / b;
	console.log("qui vi parla la funzione divisione");
	return c;
}
var a=5, b=10;
var c = addizione(a,b) + 
		sottrazione(a,b) + 
		moltiplicazione(a,b)+
		divisione(a,b);
console.log(c);	
*/
//funzioni richiamate con numero di argomenti differente da quanto dichiarato	
/*
function prova(argument) {
	console.log(argument);
}
prova();
prova(4);
prova(4,78);
*/
/*
var somma = function (a, b) {
	return a + b;
};

console.log(   somma(5,"5")      );
*/
/*
var linguaggi = ["C#", "Java", "PHP", "JavaScript", 5, true, [5,7]];
//                 0      1      2          3

linguaggi.push("Objective-C");
linguaggi.pop();
linguaggi.unshift("Pascal");
linguaggi.shift();
for (var i = 0; i < linguaggi.length; i++) {
	console.log(linguaggi[i]);
}
console.log(linguaggi.indexOf("C++"));
*/
/*
var studente = {  
		nome: "mauro", 
		presente: true, 
		cilindrata:600, 
		fiori: ["cineraria", "gerbera", "rosa"],
		zaino: {colore:"grigio", tasche: 2},
		saluta: function () {
			console.log('ciao da ' + this.nome );
		}
};
console.log(studente.saluta());
*/
/*
var fiore1 = {nome:"rosa", colore:"giallo"};
var fiore2 = {nome:"margherita", colore:"bianco-giallo"};
var fiore3 = {nome:"tulipano", colore:"arancione"};
var fiore4 = {nome:"garofano", colore:"rosso"};
var fiore5 = {nome:"viola", colore:"viola"};

var negozio = [fiore1, fiore2, fiore3,fiore4,fiore5];

for (var i = 0; i < negozio.length; i++) {
	console.log(negozio[i].nome);
}
*/

//console.log(Math.pow(6,3));
console.log("la lezione è quasi terminata".replace("quasi", ""));