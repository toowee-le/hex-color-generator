// DOM elements
const hex = document.getElementById('hex');

// Get color
function getColor() {
    let color = '#' + Math.random().toString(16).slice(2, 8);

    document.body.style.background = color;
    hex.innerHTML = color;
    hex.style.color = 'white';
}

// Change background color when spacebar is pressed
document.body.onkeyup = e => {
    if (e.keyCode == 32 || e.which == 32) {
        getColor();
    }
}