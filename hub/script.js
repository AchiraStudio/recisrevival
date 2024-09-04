// Track the currently active .img element
let activeImg = null;

// Click event listener for .img elements
document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', function(event) {
        // If the click is on the .text element or its children, stop propagation
        if (event.target.closest('.text')) {
            event.stopPropagation();
            return;
        }
        
        // If the clicked .img is already active, remove active class
        if (activeImg === this) {
            this.classList.remove('active');
            activeImg = null;
        } else {
            // Remove 'active' class from the previously active .img
            if (activeImg) {
                activeImg.classList.remove('active');
            }
            // Add 'active' class to the clicked .img
            this.classList.add('active');
            activeImg = this;
        }
    });
});

// Click event listener for the document to handle clicks outside .img
document.addEventListener('click', function(event) {
    if (!event.target.closest('.img')) {
        if (activeImg) {
            activeImg.classList.remove('active');
            activeImg = null;
        }
    }
});
