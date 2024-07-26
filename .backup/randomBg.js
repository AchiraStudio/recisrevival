 // Function to generate a random color
 function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to set random background colors for divs with IDs 1 to 8
function setRandomBackgrounds() {
    for (let i = 1; i <= 8; i++) {
        const div = document.getElementById(i.toString());
        if (div) {
            div.style.backgroundColor = getRandomColor();
        }
    }
}

// Call the function to set random backgrounds when the page loads
window.onload = setRandomBackgrounds;