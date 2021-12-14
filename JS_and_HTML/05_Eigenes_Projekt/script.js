//Slider Value auslesen


var slider = document.getElementById("sliderpw");
var output = document.getElementById("valuelength");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = slider.value;
 
}

//Passwort Generieren
function RandomPassword(number, lower, upper, specialchar) {
	var Zahlen = "0123456789";
	var kleinBuchstaben = "abcdefghijklmnopqrstuvwxyz";
	var Großbuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var Sonderzeichen = "`~!@#$%^&*()-_=+[{]}|;:'\",<.>/? ";

	var randompw = "";

	if (number == true)
		randompw += Zahlen;
	if (lower == true)
		randompw += kleinBuchstaben;
	if (upper == true)
		randompw += Großbuchstaben;
	if (specialchar == true)
		randompw += Sonderzeichen;
    kek = randompw.length;
	return randompw.charAt(RandomNumber(randompw));
}
function RandomNumber(max) {
    result = "";
   

    for (var index = 0; index < slider.value; ++index) {
        result += max.charAt(Math.floor(Math.random() * slider.value));
    }

    document.getElementById("Ausgabe").innerHTML = result;
    
}

function getPassword() {
        mylength = slider.value;
        numbers = document.getElementById('Zahlen').checked;
        Sonderzeichen = document.getElementById('Sonderzeichen').checked;
        kleineBuchstaben = document.getElementById('kleineBuchstaben').checked;
        Grossschrift = document.getElementById('Grosschrift').checked;

        var password = "";

        for (var index = 0; index < slider.value; ++index) {
            password += RandomPassword(numbers, kleineBuchstaben, Grossschrift, Sonderzeichen);
        }

        document.getElementById("Ausgabe").innerHTML = result;
        
        
}