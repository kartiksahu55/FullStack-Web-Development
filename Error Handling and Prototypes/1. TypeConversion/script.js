const btn = document.getElementById("btn")
const display = document.getElementById("display")

function isThisANumber(inputString) {
    if (isNaN(inputString)) {
        throw new Error('Invalid Number')
    } else {
        return inputString
    }
}

function checkNumber() {
    const inputString = document.getElementById("entry").value
    try {
        display.innerText = isThisANumber(inputString);
    } catch (myError) {
        display.innerText = myError.message;
    }
}