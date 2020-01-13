// Get color
function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

// Set background color
function setBackground() {
    let bgColor = getColor();
    document.body.style.background = bgColor;
}

// Change background color when spacebar is pressed
document.body.onkeyup = e => {
    if (e.keyCode || e.which == 32) {
        setBackground();
    }
}