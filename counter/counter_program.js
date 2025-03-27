const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const counterLabel = document.getElementById('counter');

let counter = 0;

incrementButton.onclick = function() {
    counter++;
    counterLabel.textContent = counter;
}

decrementButton.onclick = function() {
    counter--;
    counterLabel.textContent = counter;
}

resetButton.onclick = function() {
    counter = 0;
    counterLabel.textContent = counter;
}
