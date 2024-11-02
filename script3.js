function poster() {
    window.location.href = "https://forms.gle/hNBga6MJkBVYtevx5"
}

function ed() {
    window.location.href = "https://docs.google.com/forms/d/1N6SmwAAAzxaeUxcAZ2QOFqk85RgLFzktgWIS5JLXhp0/edit"
}

function md() {
    window.location.href = "https://forms.gle/PnMk9jpWRAb9gUfM9"
}

function basket() {
    window.location.href = "https://forms.gle/pUpmi8nXGurnoKxJA"
}

function volley() {
    window.location.href = "https://forms.gle/nNwg4TZZCMqzT6pd8"
}

function band() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfvZBGmrfDOhkyzVkMz1285f3B1QFtmmTPXbSQ17pbMtMQP0w/viewform?usp=sharing"
}

function esportsma() {
    window.location.href = "https://forms.gle/Q8gaiU8iaLQpEJDh7"
}

function esportsmp() {
    window.location.href = "https://forms.gle/fMfpWzTKVJsiE4hAA"
}

function futsal() {
    window.location.href = "https://forms.gle/fxJGerB17ZYbQeuE7"
}

function gotoRP() {
    window.location.href = "https://reginapacis.sch.id/"
}

function artis() {
    window.location.href = "artis/index.html"
}

function gotoHub() {
    window.location.href = "hub/hub.html"
}

function rpnet(){
    window.location.href = "https://reginapacis.sch.id/"
}

function spotras(){
    window.location.href = "https://open.spotify.com/artist/11k3Y6uyixbyGfgPl8qZTZ?si=416721a1f18c4ab8"
}

function spotran(){
    window.location.href = "https://open.spotify.com/artist/5DSVjHy2YWufmRUHBM3PLX?si=oP_VvVzdTwK4QO6YUcIbng"
}

function sma() {
    window.location.href = "https://forms.gle/fCyv1KQQBnHodp617"
}

function smp() {
    window.location.href = "https://forms.gle/DE2o5twsLptX8udY6"
}


// Change Image

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#vmenu .container .img');
    let currentImageIndex = 0;
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
    }

    // Show the first image initially
    showImage(currentImageIndex);

    // Change image every 5 seconds
    setInterval(nextImage, 5000);
});

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
