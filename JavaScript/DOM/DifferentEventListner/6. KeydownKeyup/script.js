const container = document.getElementById("container");
const text = document.getElementById("text");


document.addEventListener("keydown", (e)=>{
    text.innerText = e.key+" "+"Key Down"
    container.style.backgroundColor="white"

})

document.addEventListener("keyup", (e)=>{
    text.innerText=e.key+" "+"Key Up"
    container.style.backgroundColor=""
})
