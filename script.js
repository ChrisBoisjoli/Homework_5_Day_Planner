// set today's date
var today = moment();
$("#currentDay").text(today.format('MMMM Do YYYY, h:mm:ss a'));

// save tasks object



var setTask = function(){
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
    for (var i = 0; i < tasks.length; i++){
        var taskText = $(".task-input");
        taskText.text(tasks[i]);
    };
    console.log(tasks);

    $(".task").text(".task-input");
    
    // $(".task").append(localStorage);

    
};
console.log(setTask);

// pull tasks from local
var retrieveTask = function(){

    if (tasks = setTask){
        

        $.each(tasks, function(){
            
            $("tasks").append(localStorage);
        })
        
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
   
  
// get the tasks from localStorage on load.
retrieveTask();
