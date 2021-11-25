
function additionbuttonclicked()
{
    //Erste Zahl auslesen
    num1 = document.getElementById("number1").value;
    
    //Zweite Zahl auslesen
    num2 = document.getElementById("number2").value;


    let result = parseFloat(num1) + parseFloat(num2);

    document.getElementById("Ergebnis").innerHTML = result;
   


}

function subtraktionbuttonclicked()
{
    //Erste Zahl auslesen
    num1 = document.getElementById("number1").value;
    
    //Zweite Zahl auslesen
    num2 = document.getElementById("number2").value;


    let result = parseFloat(num1) - parseFloat(num2);

    document.getElementById("Ergebnis").innerHTML = result;


}

function multiplizierenbuttonclicked()
{
    //Erste Zahl auslesen
    num1 = document.getElementById("number1").value;
    
    //Zweite Zahl auslesen
    num2 = document.getElementById("number2").value;


    let result = parseFloat(num1) * parseFloat(num2);

    document.getElementById("Ergebnis").innerHTML = result;
}

function dividierenbuttonclicked()
{
    //Erste Zahl auslesen
    num1 = document.getElementById("number1").value;
    
    //Zweite Zahl auslesen
    num2 = document.getElementById("number2").value;


    let result = parseFloat(num1) / parseFloat(num2);

    document.getElementById("Ergebnis").innerHTML = result;
}