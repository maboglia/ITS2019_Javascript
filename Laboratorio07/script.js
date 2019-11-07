//factory
function creaCantante(nome, genere, tour){
    return {nome, genere, tour,scheda(){
        () => nome + ", " + genere + ", " + tour;
    }}
}

function Cantante(nome, genere, tour) {
    
    this.nome = nome;
    this.genere = genere;
    this.tour=tour;

    this.scheda = () => this.nome + ", " + this.genere + ", " + this.tour;  

}
//funzione per costruire oggetti del DOM
function costruisciOggetto(elem, test, attributi){
    const scheda1 = document.createElement(elem);
    const testo = document.createTextNode(test);
    if (attributi != undefined) {
       scheda1.setAttribute(
           attributi.chiave, attributi.valore
           ); 
    }

    scheda1.appendChild(testo);
    return scheda1;
}

const schede = document.getElementById("schede");
//const c4 = creaCantante("prova", "testa", ["to", "mi"]);
var spettacoli = [
    new Cantante("Caparezza", "pop-rock", [{citta:"Torino", prezzo: 15}, {citta:"Roma", prezzo: 25}, {citta:"Napoli", prezzo: 35}]),
    new Cantante("Dani Faiv", "rap arcobaleno", [{citta:"Venezia", prezzo: 15}, {citta:"Milano", prezzo: 25}, {citta:"Bari", prezzo: 35}]),
    new Cantante("Sfera ebbasta", "trap", [{citta:"Como", prezzo: 15}, {citta:"Firenze", prezzo: 25}, {citta:"Siracusa", prezzo: 35}])
];
//console.log(c4.scheda());

function costruisciSchedaInfo(cantante) {
    
    let titolo = costruisciOggetto("h1", cantante.nome, {chiave:"class",valore:"cantante"}); 
    let genere = costruisciOggetto("h2", cantante.genere, {chiave:"class",valore:"genere"});
    //let tendina = costruisciOggetto(elem, test, attributi);

    return titolo.outerHTML + genere.outerHTML //+ tendina;
}


//ciclo for ... of: un tipo di ciclo (foreach) adatto a scorrere le collections
for (let cantante of spettacoli){
    //let scheda = costruisciOggetto("div", cantante.scheda());
    //schede.appendChild(scheda);
//eseguo la funzione per costruire la scheda
schede.innerHTML += costruisciSchedaInfo(cantante);
let stringa = "<select>";
for (tappa of cantante.tour){
    stringa += "<option value='"+tappa.prezzo+"'>"+tappa.citta+ " " + tappa.prezzo +"</option>";
}
stringa += "</select>";

let inputQuantita = "<input type='number' class='numBiglietti'/> ";

schede.innerHTML += stringa + inputQuantita;  

}

const bottone = costruisciOggetto("button", "acquista", {chiave:"onclick", valore: "acquista()"})
schede.after(bottone);

function acquista(){
    let biglietti = document.getElementsByClassName("numBiglietti");

    let costoBiglietti = 0;
    for (biglietto of biglietti){
        let prezzo =biglietto.previousElementSibling.selectedOptions[0].value;
        costoBiglietti += biglietto.value * prezzo ;
    }
    console.log( costoBiglietti);
}


