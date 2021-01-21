// set today's date
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

// save tasks object
var tasks = {
    "9" : [],
    "10" : [],
    "11" : [],
    "12" : [],
    "13" : [],
    "14" : [],
    "15" : [],
    "16" : [],
    "17" : [],
};

var setTask = function(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var retrieveTask = function(){

    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks){
        tasks = savedTasks

        $.each(tasks, function(hour,task){
            var hourDiv = $("#" + hour);
            createTask(task, hourDiv);
        })
    }
    verifyTask()
};
var buildTask = function(taskText, hourDiv){

    var taskDiv =hourDiv.find(".task");
    
};