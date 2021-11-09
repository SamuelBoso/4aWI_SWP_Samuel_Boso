let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;


//Preis 8 Äpfel

let Gewichtapple = 0.34
let anzahlapple = 8;
let kilo = Gewichtapple * anzahlapple;
result = applePricePerKilo * kilo;

console.log(anzahlapple + " Äpfel kosten insgesamt " + result);

//Preis 17 Bananen

let Gewichtbanane = 0.22;
let anzahlbanane = 17;
kilo = Gewichtbanane * anzahlbanane;
result = bananaPricePerKilo * kilo;

console.log(anzahlbanane + " Bananen kosten insgesamt " + result);

//Preis 1 Tonne Äpfel

let kiloapple = 1000;
let anzahläpfel = kiloapple/0.34;
result = applePricePerKilo * kiloapple;

console.log(anzahläpfel + " Äpfel kosten insgesamt " + result);

//Preis 1 Tonne Äpfel

let kilobananen = 1000;
let anzahlbananen = kilobananen/0.22;

result = bananaPricePerKilo * kilobananen;

console.log(anzahlbananen+ " Äpfel kosten insgesamt " + result);
