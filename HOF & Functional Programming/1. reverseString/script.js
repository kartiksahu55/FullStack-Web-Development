
function reverseMe(){
const input=document.getElementById("input").value;
const display=document.getElementById("display")
const inputArr=input.split("")
inputArr.reverse()

const reverseString=inputArr.join("")
display.innerText="...processing"
setTimeout(()=>{
    display.innerText=reverseString
},2000)

}