let celsiusToFahrenheit = () => {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit")

    let far = (celsius * 9 / 5) + 32

    if (far !== null) {
        fahrenheit.value = far
        navigator.clipboard.writeText(far)
    }


}

