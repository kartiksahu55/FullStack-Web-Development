const listItems = [
    "HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"];

let i=0;
let ol=document.getElementById("ol");
let displayError=document.getElementById("displayError");

document.getElementById("btn").addEventListener("click", ()=>{
    document.getElementById("box").style.display="block"
    
    if(i===listItems.length){
        return displayError.innerText="<---All item have been added--->"
    }

    let li=document.createElement("li")
    li.textContent=listItems[i]
    i++
    ol.appendChild(li)
    
    
})