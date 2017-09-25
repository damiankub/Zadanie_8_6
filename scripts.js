
var a = 5;
var b = -4;
var value = (a * a) + (2 * a * b) - (b * b);
console.log("Wynik to :" + value);
if (value>0) {
	console.log("Wynik jest dodatni");
} else if (value<0) {
	console.log("Wynik jest ujemny");
}
else {
	console.log("Wynik jest równy 0");
}