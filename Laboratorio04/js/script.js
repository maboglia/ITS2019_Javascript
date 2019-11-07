
console.dir(document.getElementById("titolo").children[0])
console.dir(document.getElementById("titolo").innerHTML)
document.getElementById("titolo").children[0].textContent="vita";

function sceltaGiusta() {
		
	var a = Math.floor(   Math.random() * 2   );
	var b = Math.floor(   Math.random() * 2   );

	if (a > b){
	//location.href="http://www.bogliaccino.it";
	//document.getElementById("titolo").textContent = "SI";
	}
	else
	{
	//location.href="http://www.zalando.com";
	//document.getElementById("titolo").textContent = "NO";

	}
}
sceltaGiusta();