function rollDice() {
    const numDice = document.getElementById("numOfDiceInput").value;
    const textResults = document.getElementById("diceTextResult");
    const imageResults = document.getElementById("diceImageResult");
    const rollButton = document.getElementById("rollButton");

    let diceRolls = [];
    let diceImages = [];

    for (let i = 0; i < numDice; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        diceRolls.push(roll);
        diceImages.push(`<img src="dice_images/dice${roll}.png" alt="dice${roll}">`);
    }

    textResults.textContent = `You rolled: ${diceRolls.join(", ")}`;
    imageResults.innerHTML = diceImages.join(" ");
}
