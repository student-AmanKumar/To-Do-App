const inputBox = document.getElementById("input-box");
const listcContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You Must write Something");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listcContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();


}
listcContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove() ;
        saveData();

        }
}, false);
function saveData(){
    localStorage.setItem("data",listcContainer.innerHTML)
}
function showTask(){
    listcContainer.innerHTML=localStorage.getItem("data")
}
showTask();
