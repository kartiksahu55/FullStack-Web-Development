function validatePass() {
    const userEmail = document.getElementById("userEmail").value
    const userPass =document.getElementById("userPass").value
    const message=document.getElementById("message")
    const minPassLength = 8
    const password = userPass + ""
    if (userEmail.includes("@") && password.length >= minPassLength) {
        message.textContent="Valid email and password.";
        message.style.color="green";
        return false
    }

    message.textContent="Invalid email or password."; 
    message.style.color="red"
    return;
}
