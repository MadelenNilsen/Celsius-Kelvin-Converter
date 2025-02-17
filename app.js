document.getElementById("celsius").addEventListener("input", function (event) {
    this.value = this.value.replace(/[^0-9.-]/g, ''); // Allow only numbers, dot, and minus sign
});



document.getElementById("convertBtn").addEventListener("click", function (event) {
    let celsiusInput = document.getElementById("celsius");
    let celsius = parseFloat(celsiusInput.value); // Convert input in inputfield into a number


    if (!isNaN(celsius)) {
        let kelvin = celsius + 273.15; // Celsius to Kelvin conversion
        document.getElementById("kelvin").textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
    } else {
        document.getElementById("kelvin").textContent = "Please enter a valid number";
    }
});

document.getElementById("reset").onclick = function () {
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").textContent = "";
};

