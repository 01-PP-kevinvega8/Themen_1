
/* Berechnung alter */ 

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

// Berechnung Alter 
let date = new Date(); // Systemfunktion Datum 
let year = date.getFullYear();
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

//Deklaration
let isJohnOlder
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);

