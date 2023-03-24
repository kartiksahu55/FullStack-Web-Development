const ul=document.getElementById("ul");
const input=document.getElementById("input");
const button=document.getElementById("button");
const reset=document.getElementById("reset");

button.addEventListener("click", ()=>{
    if(input.value!=""){
    let li=document.createElement("li");
    ul.appendChild(li).innerText=input.value
    input.value=''
    }
})

reset.addEventListener("click", ()=>{
    let list=document.querySelectorAll("li")
    for(list of list)
    ul.removeChild(list)
})