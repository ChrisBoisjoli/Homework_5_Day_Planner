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
// pull tasks from local
var retrieveTask = function(){

    var savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks){
        tasks = savedTasks

        $.each(tasks, function(hour,task){
            var hourDiv = $("#" + hour);
            $("tasks").append(savedTasks);
        })
        console.log(savedTasks);
    }
    verifyTask()
};
// add row with saved task
var buildTask = function(taskText, hourDiv){

    var taskDiv =hourDiv.find(".task");
    var taskPar = $("<p>").addClass("description").text(taskText)
    taskDiv.html(taskPar);

};
// check current tasks in local storage and local time
var verifyTask = function(){

var currentHour = moment().hour();
$(".task-data").each(function(){
    var rowHour = parseInt($(this).attr("id"));

    if (rowHour < currentHour){
        $(this).removeClass(["present", "future"]).addClass("past");
    }
    else if ( rowHour === currentHour ) {
        $(this).removeClass(["past", "future"]).addClass("present");
    }
    else {
        $(this).removeClass(["past", "present"]).addClass("future");
    }
    })
    // console.log(currentHour);
};

var replaceTextarea = function(textareaElement){
    var taskInfo = textareaElement.closest(".task-data");
    var textArea = taskInfo.find("textarea");

    var time = taskInfo.attr("id");
    var text = textArea.val();

    tasks[time] = [text];
    setTask();

    // createTask(text, taskInfo);
    console.log(textArea);
};
// click functions
$(".task").click(function(){

    $("textarea").each(function(){
        replaceTextarea($(this));
    })

    var time = $(this).closest(".task-data").attr("id");
    if (parseInt(time) >= moment().hour()){
        
        var text = $(this).text();
        var textInput = $("<textarea>").addClass("form-control").val(text);

        $(this).html(textInput);
        textInput.trigger("focus");

    }
})


// save button
$(".saveBtn").click(function(){
    replaceTextarea($(this));
});
timeToHour = 3600000 - today.milliseconds();  // check how much time is left until the next hour
setTimeout(function() {
    setInterval(verifyTask, 3600000)
}, timeToHour);

// get the tasks from localStorage on load.
retrieveTask();
