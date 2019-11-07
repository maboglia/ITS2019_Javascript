var nani = ["mammolo", "eolo", "pisolo",
"brontolo", "dotto", "cucciolo", "gongolo"];

//console.log(nani);

nani.sort();
nani.reverse();

//1) preparo una variabile stringa vuota
var contenutoUL = "";

//2)preparo un ciclo for per scorrere il mio array
for (var i = 0; i < nani.length; i++){

    //document.write("i vale " + i + " corrisponde al nano " + nani[i]);
    
    /*
    3) ad ogni iterazione del ciclo incremento 
    la stringa con un nuovo list-item 
    contenente un elemento dell'array
    */
    contenutoUL = contenutoUL + "<li>"+nani[i]+"</li>";
}
//4 individuo elemento del DOM attarverso il suo id
var lista = document.getElementById("lista");
//console.log(lista);

//5 modifico l'oggetto lista innestando la variabile stringa 
//all'interno dell'elemento
lista.innerHTML = contenutoUL;


document.getElementById("titolo").innerText= "Laboratorio 03 - 7 nani";
//alert(document.getElementsByTagName("body")[0].innerHTML);

var re = document.getElementById("re_di_roma");
console.log(re);
var puntiElenco = re.getElementsByTagName("li");
puntiElenco[2].innerText = "francesco totti";
