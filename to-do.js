
var input = document.querySelector("#enterText");
var heading = document.querySelector("h1");
var button = document.querySelector("#button");
var list = document.querySelector("ul");
var myTasks = document.querySelector("#my-tasks");
var clearAll = document.querySelector("#clear-all");
var greetingUser=document.querySelector("#greeting-user")
var arr = [];
var countChecks = 0;
var myPercent = document.querySelector("#percentage")

//write something in the input
input.oninput = function () {
// and if you click the add button
    button.onclick = function (event) {
//the input field must not be empty
        if (input.value != "") {
            var items = document.createElement("li");
//add a checkbox to the li element
            items.innerHTML = '<input type="checkbox" class="check-box" onclick="checkingBox(event)">' + input.value;
            list.appendChild(items);
            event.preventDefault();
            input.value = "";
            myTasks.style.display = "block";
            clearAll.style.display = "block";
            arr.push(1);
/*counterChecks is the total number of checkboxes that are checked(see the checkingBox function) and we are dividing this number with the total number of tasks added(we record them using the variable arr) and then multiply it by 100*/
            myPercent.innerText = Math.round((countChecks / arr.length) * 100);


        }
    }
}

function checkingBox(event) {
    if (event.target.checked == true) {
//the parent element is li
        event.target.parentElement.style.textDecoration = "line-through";
        ++countChecks;
        myPercent.innerText = Math.round((countChecks / arr.length) * 100);
    } else if (event.target.checked == false) {
        --countChecks;
        myPercent.innerText = Math.round((countChecks / arr.length) * 100);
        event.target.parentElement.style.textDecoration = "none";
    } else {
        event.target.parentElement.style.textDecoration = "none";

    }
}
clearAll.onclick = function () {
    list.innerHTML = "";
    clearAll.style.display = "none";
    myPercent.innerText = 0;
    arr = [];
    countChecks = 0;

}

//getting data from the local storage


