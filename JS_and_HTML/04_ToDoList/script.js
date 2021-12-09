const tasks = [];
printtasklist();




document.getElementById("addTask").addEventListener("click",function(){
   addTask();
});

function addTask(){
    let taskname = document.getElementById("tasktext").value;
    let taskresponsible = document.getElementById("taskresponsible").value;
    let task = {name: taskname, responsible: taskresponsible,isDone:false};    

    tasks.push(task)
    printtasklist();
}


function printtasklist(){
    document.getElementById("tasklist").innerHTML = generateTasks();
}

function markTask(element){

    let index = element.attributes["data-index"].value;
    let isChecked = element.checked;

    tasks[index].isDone = isChecked;
    printtasklist();
    
}
function generateTasks(){

    let html = "";
    let index = 0;
    tasks.forEach(element => {
        let checked="";
        if (element.isDone){
            checked = "checked";
        }
        html += "<li><input onClick='markTask(this)' name='checkbox' data-index='" + index + "' type='checkbox'" + checked + "/>" + element.isDone + "-" + element.name + "-" + element.responsible + "<li/>";
        index++;
    });
    return html;
}