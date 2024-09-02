const elements = document.getElementsByClassName('side');

// Loop through the elements and add click event listeners
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        // Toggle the opacity between 0 and 1
        if (this.style.opacity === '0') {
            this.style.opacity = '1';
        } else {
            this.style.opacity = '0';
        }
    });
}
