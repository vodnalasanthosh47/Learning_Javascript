const toFarenheit = document.getElementById('toFarenheit');
const toCelsius = document.getElementById('toCelsius');
const temperatureInput = document.getElementById('temperature');
const output = document.getElementById('result');
const convertButton = document.getElementById('convert');

function convertToFarenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function convertToCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9;
}

convertButton.onclick = function() {
    let temp = temperatureInput.value;
    let result;
    console.log(temp);
    if (isNaN(temp) || temp === '') {
        window.alert('Please enter a valid number');
    }
    else {
        temp = Number(temp);
        if (toCelsius.checked) {
            result = convertToCelsius(temp);
            output.textContent = `${temp}°F is ${result}°C`;
        }
        else if (toFarenheit.checked) {
            result = convertToFarenheit(temp);
            output.textContent = `${temp}°C is ${result}°F`;
        }
        else {
            window.alert('Please select a conversion type');
        }
        
    }

}