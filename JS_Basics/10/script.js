

let config = {
    month: 0,
    startday: 3,
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
        console.log("| " + config.days.join(" | "));
}

printdays();

function monthdays(){
    let week = "";
    for(i = 0; i<config.months.days;i++){
        if(config.months.days[i] == "SO"){
            console.log("kek" + "kek2")   
        }

        
    }
}
monthdays();



function weekdays(){
for(index = 1; index<config.startday; index++){
    console.log("| -- |");
}
}