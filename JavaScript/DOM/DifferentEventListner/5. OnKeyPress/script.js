const input=document.getElementById("input");
const display=document.getElementById("display");

input.addEventListener("keypress",(e)=>{
    display.innerText=e.key
    display.style.fontSize="40px"
})