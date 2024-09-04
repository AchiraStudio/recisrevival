document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            // Remove 'active' class from all images before adding it to the clicked one
            document.querySelectorAll('.img').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

function checkScreenWidth() {
    const imgElement = document.getElementById('one');
    
    if (window.innerWidth <= 431) {
        imgElement.classList.add('disable-hover');
    } else {
        imgElement.classList.remove('disable-hover');
    }
}

// Run the function on page load and on window resize
window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);
