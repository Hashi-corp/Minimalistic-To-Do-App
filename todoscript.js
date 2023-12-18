const input = document.getElementById("ipbox");
const listcontainer = document.getElementById("listcontainer");

function addTask(){
    if (input.value === ''){
        alert("Empty tasks are not allowed.");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    input.value = '';
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();