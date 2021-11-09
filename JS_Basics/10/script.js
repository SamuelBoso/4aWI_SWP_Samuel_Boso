

let config = {
    month: 0,
    startday: 1,
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

function printMonth() {

    for (let p = 0; p < 12; p++) {

        console.log(printdays());

    }
}

function printweekdays() {
    let b = config.months.days[i];
    for (let i = 1; i <= config.months[0].days; i++) {

        console.log("| " + i);
    }
}

printMonth();


