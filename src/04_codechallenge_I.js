
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});
let ersteZahl = parseFloat(prompt("erste Zahl: "));
let zweiteZahl = parseFloat(prompt("zweite Zahl: "))
let summe = ersteZahl + zweiteZahl

console.log("Die Summe der Zahlen ist: " + summe); 
