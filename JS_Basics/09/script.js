//Aufgabe 1

for (let i = 0; i < 4; i++){
    if(i % 2 == 0)
    {
        console.log("XXXX");
    }
    else{
        console.log("0000");
    }
}

//Aufgabe 2

let summe = 0;

for (let i = 2; i < 101; i = i+2){
        summe = summe + i;
    }
console.log(summe);


//Aufgabe 3

for(let i = 2; i <= 6; i++){
    if(i % 2 == 0){
        console.log("XXXX");
    }
    else if(i % 2 !== 0){
        
        if(i == 5){
            console.log("   X");
        }
        else{
            console.log("X");
        }   
    }      
}

