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
