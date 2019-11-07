var scelte = ["carta", "forbice", "sasso"];
var sceltaUmano = prompt("scegli carta, forbice, sasso"); //scelte[2];
var sceltaPC;



for (let index = 0; index < 1000; index++) {


    var casuale = parseInt(Math.random() * scelte.length);
    sceltaPC = scelte[casuale];
    vincitore(sceltaUmano, sceltaPC);
}

function vincitore(umano, macchina) {
    if (umano == macchina)
        console.log("pareggio");
    else if (umano == "carta") {
        if (macchina == "forbice")
            console.log("macchina");
        else
            console.log("umano");
    } else if (umano == "forbice") {
        if (macchina == "sasso")
            console.log("macchina");
        else
            console.log("umano");
    } else if (umano == "sasso") {
        if (macchina == "carta")
            console.log("macchina");
        else
            console.log("umano");
    }


}