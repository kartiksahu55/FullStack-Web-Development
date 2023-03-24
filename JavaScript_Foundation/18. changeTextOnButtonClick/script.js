const heading = document.getElementById("heading");

function change() {
    if (heading.innerText === "The most affordable learning platform") {
       return heading.innerText = "PW Skills"
    }
    else{
        return heading.innerText = "The most affordable learning platform"
    }

}

document.getElementById("btn").addEventListener("click", change)