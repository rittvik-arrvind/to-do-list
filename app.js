var listOfActivities=[];

var input = document.getElementById("input");

var toDoList = document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivities.push(input.value);

    console.log(listOfActivities);

    input.value="";

    showList();
}

function showList(){
    toDoList.innerHTML="";

    listOfActivities.forEach(function(current_value, index){
        toDoList.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>editItem</a>"+
        "<a onclick='deleteItem("+index+")'>&times |</a>")
    })

}