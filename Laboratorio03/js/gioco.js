function gioca(parola) {
    console.log("hai cliccato " + parola);
    var sceltaPC = giocaPC();
    var risultato = vincitore(parola, sceltaPC);
    document.getElementById("risultato").innerHTML = risultato;
}

function giocaPC(){
    var casuale = Math.random();
    var sceltaPC = "";

        if (casuale < 0.34)
            sceltaPC = "pietra";
        else if (casuale <0.67)
            sceltaPC = "forbici";
        else
            sceltaPC = "carta";
    return sceltaPC;

}

function vincitore(scelta1, scelta2) {

    if (scelta1 === scelta2 )
        return "pareggio";

   else  if (scelta1 === "pietra") {
        if (scelta2 == "carta") 
            return "vince macchina";
        else 
            return "vince umano";     
    }
 

   else  if (scelta1 === "forbici") {
        if (scelta2 == "pietra") 
            return "vince macchina";
        else 
            return "vince umano";     
    }

   else  if (scelta1 === "carta") {
        if (scelta2 == "forbici") 
            return "vince macchina";
        else 
            return "vince umano";     
    }
 
}