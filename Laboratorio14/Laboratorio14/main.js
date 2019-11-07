var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, false, 'ciao'];
var Taglie;
(function (Taglie) {
    Taglie[Taglie["MEDIUM"] = 44] = "MEDIUM";
    Taglie[Taglie["SMALL"] = 40] = "SMALL";
    Taglie[Taglie["LARGE"] = 50] = "LARGE";
})(Taglie || (Taglie = {}));
;
console.log(Taglie.MEDIUM);
var scrivi = function (messaggio) { return console.log(messaggio.toUpperCase()); };
scrivi("ciao");
