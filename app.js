// Get color
function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

// Set background color
function setBackground() {
    let bgColor = getColor();
    document.body.style.background = bgColor;
}

setBackground();