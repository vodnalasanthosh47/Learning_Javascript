const display = document.getElementById("result");

function appendToDisplay(value) {
  display.textContent += value;
}

function clearDisplay() {
    display.textContent = "";
}

function calculate() {
    try {
        const result = eval(display.textContent);
        display.textContent = result;
    } catch (error) {
        display.textContent = "Error";
    }
}
