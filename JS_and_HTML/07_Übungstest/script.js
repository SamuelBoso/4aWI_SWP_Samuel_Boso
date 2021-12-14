
function randomnumber()
{
    //Erste Zahl auslesen
    num1 = document.getElementById("number1").value;
    
    //Zweite Zahl auslesen
    num2 = document.getElementById("number2").value;

    let amountOfRandomNumbers = parseInt(num2) - parseInt(num1) + 1;

    let number = "";

    for(i=num1; i<=amountOfRandomNumbers;i++)
    {
        number += i + " ";
        
    }
    number+=num2;

    document.getElementById("Ergebnis").innerHTML = number;

}
