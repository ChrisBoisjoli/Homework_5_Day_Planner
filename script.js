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
console.log(tasks);
    
    if (tasks = setTask){
        

        $.each(tasks, function(){
            
            $("tasks").append(localStorage);
        })
        console.log(setTask);
    }
    verifyTask()
};
// add row with saved task
var buildTask = function(){
    $(".task").empty();
    $(".task").append(localStorage);
    // var taskDiv = hourDiv.find(".task");
    // var taskPar = $("<p>").addClass("description").text(taskText)
    // taskDiv.html(taskPar);

};
// check current tasks in local storage and local time
var verifyTask = function(){
// update color by hour
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
    
};
// save button
    $(".saveBtn").on("click", function(setTask){
    $(".task").text(tasks);
    }); 
   
    // var replaceTextarea = function(textareaEl){
    // var taskInfo = setTask.append("#task-form");
    // var textArea = taskInfo.find("textarea");

    // var time = taskInfo.attr("id");
    // var text = textArea.val();

    // tasks[time] = [text];
    // setTask();

    // createTask(text, taskInfo);
//     console.log(textArea);
// };
// click functions
// $(".task").on("click", function(){

//     $("textarea").each(function(){
//         replaceTextarea($(this));
//     })

//     var time = $(this).closest(".task-data").attr("id");
//     if (parseInt(time) >= moment().hour()){
        
//         var text = $(this).text();
//         var textInput = $("<textarea>").addClass("form-control").val(text);

//         $(this).html(textInput);
//         textInput.trigger("focus");

//     }
// })



timeToHour = 3600000 - today.milliseconds();  // check how much time is left until the next hour
setTimeout(function() {
    setInterval(verifyTask, 3600000)
}, timeToHour);

// get the tasks from localStorage on load.
retrieveTask();
