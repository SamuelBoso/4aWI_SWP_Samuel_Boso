function buttonclicked(){

    größe = document.getElementById("Größe").value;
    gewicht = document.getElementById("Gewicht").value;


    let result = ((größe * 1.43) / gewicht)-3.4;

    let round_result = Math.round(result)
    
    ausgabe(result,round_result)
}

function ausgabe(result,result2){

    if(result > 0){

        ergebnis = "";

        for(i=0; i<=result2; i++){
            ergebnis += i + " ";    
        }
        
        let ausgabe = "positiv " + ergebnis;
        document.getElementById("ausgabe").innerHTML = ausgabe;
    }
    else{

        ergebnis = "";

        for(i=0; i>=result2; i--){
            ergebnis += i + " ";   
            }

        let ausgabe = "negativ " + ergebnis;
        document.getElementById("ausgabe").innerHTML = ausgabe;
    }

}