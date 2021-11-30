const task = ["putzen", "tanzen", "kochen"];
generateTasks();
printtasklist();

document.getElementById("addTask").addEventListener("click",function(){

    document.getElementById("tasklist").nodeValue;
});


function printtasklist(){
    document.getElementById("tasklist").innerHTML = generateTasks;
}

function generateTasks(){

    let html = "";
    task.forEach(element => {
        html += "<li>" + element + "<li/>";
        
    });
    return html;
}