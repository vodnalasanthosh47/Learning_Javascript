const revealButton = document.getElementById('reveal');
const crazyImage = document.getElementById('crazy');

revealButton.onclick = function() {
    if (crazyImage.style.visibility === 'hidden') {
        crazyImage.style.visibility = 'visible';
        revealButton.innerText = 'Hide';
    }
    else {
        crazyImage.style.visibility = 'hidden';
        revealButton.innerText = 'Reveal';
    }
}
