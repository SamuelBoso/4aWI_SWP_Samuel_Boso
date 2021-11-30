
function randomnumber()
{
    //Erste Zahl auslesen
    num1 = document.getElementById("number1").value;
    
    //Zweite Zahl auslesen
    num2 = document.getElementById("number2").value;

    let amountOfRandomNumbers = parseInt(num2) - parseInt(num1) + 1;

    let randomnumber = Math.floor(Math.random() * amountOfRandomNumbers + parseInt(num1));

    let result = randomnumber;

    document.getElementById("Ergebnis").innerHTML = result;
   


}
