let config = {
    month: 0,
    startday: 2,
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
let january_exception = 0;
function offsethandler(indexofmonth, example){
    
    if(january_exception == 0)
    {
        config.startday == config.startday;
    }
    else{
    config.startday = config.startday + config.months[indexofmonth].days % 7;
    }
    
    january_exception++;

    if(config.startday >= 7){
        config.startday %= 7;
    }
    offsettext = "|"; 
    
    for(let m = 1; m <= config.startday; m++){
        
        
        
            offsettext += " -- |";
       
    }
    example += offsettext;
    return example;
    
    }



function printMonth() {

   

    for (let p = 0; p < 12; p++) {
        console.log("------------------------------------");
        printdays();
        let example = " ";
        if(p == 0){
            offsethandler(p, example); 
        }
        
        for (let i = 1; i <= config.months[p].days; i++) {
            
            example += formatNumber(i) + " | ";
            
            if((config.startday + i) == 7){
                
                console.log(offsettext + example + "\n");
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
            offsethandler(p, example); 
        }
       
           
        
        }
    


printMonth();
