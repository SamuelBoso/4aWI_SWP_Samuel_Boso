function  registerEvents(){
    document.getElementById("LoadTasks").addEventListener("click", function(){
        loadTasks();
    })

    document.getElementById("LoadUsers").addEventListener("click", function(){
        loadUsers(); 
    })
}

function loadTasks(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html= "";
            data.forEach(element => {
                html += "<li>" + element.title + "</li>";
            });
            
            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html= "";
            data.forEach(element => {
                html += "<li>" + element.name + "</li>";
            });
            
            document.getElementById("list").innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}

registerEvents();