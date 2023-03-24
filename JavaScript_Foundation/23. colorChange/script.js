function changeColor() {
    let randomNum = Math.floor(Math.random() * 16777215);
    let randomColor = "#" + randomNum.toString(16);
    document.body.style.backgroundColor=randomColor
    document.querySelector(".container").style.backgroundColor=randomColor
    // return randomColor
}

console.log(changeColor());