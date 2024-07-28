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