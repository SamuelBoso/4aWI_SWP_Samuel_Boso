
loadStandings();

function showTeam(id){
    let urlTeam = "http://api.football-data.org/v2/teams/" + id;
    
    fetch(urlTeam, {
        method: "GET",
        headers: {
            "x-auth-token": "819babcd7902454f930c154272296d78"
        }
    })
    .then(response => response.json())
    .then(function (data) {
        let html1="";
        let html2="";
        data.squad.forEach(squad => {
                html2 += "<li>" + squad.name + "</li>";

        });
        
    html1 += "<h4>Teamname: " + data.name + "</h4>" + "<h4>Gegründet: " + data.founded + "<h4>Adresse: " + data.address + "</h4>" 
    + "<h4>Website: " + "<a href='data.website'>" + data.website + "</a>"  + "</h4>" + "<h4>E-Mail: " + data.email + "</h4>" + "<img src='" + data.crestUrl + "'width=100 height=150/>" + "<h4>Spieler: ";

    
    document.getElementById("players").innerHTML=html1;
    document.getElementById("content").innerHTML=html2;

    })

    .catch(function (err) {
        console.log(err);
    });
}


   
           
        

function loadStandings(){
    let urlStandings = "http://api.football-data.org/v2/competitions/2021/standings"

    fetch(urlStandings, {
        method: "GET",
        headers: {
            "x-auth-token": "819babcd7902454f930c154272296d78"
        }
    })
    .then(response => response.json())
    .then(function (data) {
        let html1 = "";
        let html2 = "";
        let html3 = "";
        let html4 = "";
        let html5 = "";
        let html6 = "";
        let html7 = "";
        let html8 = "";
        let html9 = "";

        data.standings.forEach(standings => {
            standings.table.forEach(table => {
                html1 += "<li><img src='" + table.team.crestUrl + "'width=30 height=30/>" + "</li>";
                html2 += "<li onClick='showTeam(" + table.team.id + ")'>" + table.team.name + "</li>";
                html3 += "<li>" + table.position + "</li>";
                html4 += "<li>" + table.won + "</li>";
                html5 += "<li>" + table.draw + "</li>";
                html6 += "<li>" + table.lost + "</li>";
                html7 += "<li>" + table.goalDifference + "</li>";
                html8 += "<li>" + table.goalsFor + ":" + table.goalsAgainst + "</li>";
                html9 += "<li>" + table.points + "</li>";
            });
        });
        document.getElementById("pic").innerHTML = html1;
        document.getElementById("teams").innerHTML = html2;
        document.getElementById("standings").innerHTML = html3;
        document.getElementById("wins").innerHTML = html4;
        document.getElementById("draws").innerHTML = html5;
        document.getElementById("defeats").innerHTML = html6;
        document.getElementById("difference").innerHTML = html7;
        document.getElementById("goals").innerHTML = html8;
        document.getElementById("points").innerHTML = html9;


    })
    .catch(function (err) {
        console.log(err);
    });
}
