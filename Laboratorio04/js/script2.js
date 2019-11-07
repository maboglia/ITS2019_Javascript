var fiorellino = {
	colore: "rosso",
	petali: 5,
	tipo: "Zinnia",
	donato: ["marta", "peppino", "giovanna"],
	corolla: { tipo: "papillonata", colore: "giallo" }, 
	figura: "img/rosa.jpg"

};
document.getElementById("titolo").textContent = 
		fiorellino.tipo 
		+ ' ' 
		+ fiorellino.colore;
document.getElementById("foto").setAttribute("src", fiorellino.figura);