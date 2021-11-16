

let config = {
    month: 0,
    startday: 0,
    months:
    [
        {name: "Jan", days:31},
        {name: "Feb", days:28},
        {name: "Mar", days:31},
        {name: "Apr", days:30},
        {name: "Mai", days:31},
        {name: "Jun", days:30},
        {name: "Jul", days:31},
        {name: "Aug", days:31},
        {name: "Sep", days:31},
        {name: "Okt", days:31},
        {name: "Nov", days:30},
        {name: "Dez", days:31},

    ],
    days:["MO","DI","MI","DO","FR","SA","SO"],
}

function printdays(){
        console.log("| " + config.days.join(" | ") + " |");
}

function formatNumber(daynumber){
    if(daynumber < 10){
        return( "0" + daynumber);
    }
    else{
        return(daynumber);
    }
}

let offsettext ="";
let test = 0;
function offsethandler(monthlength){
    
    if(test == 0){
        config.startday = 0;
    }
    test++;
    config.startday = config.startday + config.months[monthlength].days % 7;
    if(config.startday >= 7){
        config.startday %= 7;
    }
    offsettext = ""; 
    let j = 0;
    for(let m = 1; m <= config.startday; m++){
        
        
        if(j > 0){
            offsettext += " -- |";  
        }else{
            offsettext += "-- |";   
        }
        
        j++;
    }
    return offsettext;
    
    }



function printMonth() {

    for (let p = 0; p < 12; p++) {
        printdays();
        
        
        var example = "| ";
        for (let i = 1; i <= config.months[p].days; i++) {
            
              
              //  example += offsettext + example;
            
            if(i < 2){
                example += offsettext + " " + formatNumber(i) + " | ";
            }
            else{
            example += formatNumber(i) + " | ";
            
            if((config.startday + i) == 8){
                console.log(example + "\n");
                example = "| ";
            }
            else if ((config.startday + i) % 7 == 0) {
                
                console.log(example);
                example = "| ";
            } else if (i == config.months[p].days) {            
                console.log(example);
                example = "";
                }
            }
        
        }
        offsethandler(p);
        
                     
          
        }
        
        
    
  
}

printMonth();