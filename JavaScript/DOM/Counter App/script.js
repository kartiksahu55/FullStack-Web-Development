const decrement=document.getElementById("decrementBtn");
const increment=document.getElementById("incrementBtn");
const reset=document.getElementById("resetBtn");
const displayValue=document.getElementById("display");

decrement.addEventListener("click", ()=>{
    let value=Number(displayValue.innerText);
    displayValue.innerText=value-1;
})


increment.addEventListener("click", ()=>{
    let value=Number(displayValue.innerText);
    displayValue.innerText=value+1;
})

reset.addEventListener("click", ()=>{
    let value=Number(displayValue.innerText);
    displayValue.innerText=0;
})