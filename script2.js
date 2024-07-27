document.addEventListener('DOMContentLoaded', () => {
    // Define the toggleMenu function
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
    const burgerInput = document.getElementById('burger');
    burgerInput.checked = nav.classList.contains('active');
}

// Add event listener for the burger menu
document.addEventListener('DOMContentLoaded', () => {
    const burgerInput = document.getElementById('burger');
    if (burgerInput) {
        burgerInput.addEventListener('click', toggleMenu);
    }
});

    // Gradient Movement
    const interBubble = document.querySelector('.interactive');
    if (interBubble) {
        let curX = 0, curY = 0, tgX = 0, tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        }

        window.addEventListener('mousemove', event => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();
    }

    // Burger Nav Menu
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const nav = document.getElementById('nav-menu');
            nav.classList.remove('active');
            document.getElementById('burger').checked = false;
        });
    }

    // Dropdown Menu
    function toggleDropdown() {
        const menu = document.querySelector('.menu');
        if (menu) {
            menu.classList.toggle('visible');
        }
    }

    const burger = document.querySelector('.burger');
    const close = document.querySelector('.close');

    if (burger) {
        burger.addEventListener('click', toggleDropdown);
        burger.addEventListener('touchstart', toggleDropdown);
    }

    if (close) {
        close.addEventListener('click', toggleDropdown);
        close.addEventListener('touchstart', toggleDropdown);
    }

    // Add toggleMenu function to burger input
    const burgerInput = document.getElementById('burger');
    if (burgerInput) {
        burgerInput.addEventListener('click', toggleMenu);
    }
});

// Slider
let items = document.querySelectorAll('.slider .item');
let active = 3;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Show after
    for (let stt = 1, i = active + 1; i < items.length; i++, stt++) {
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

    // Show before
    for (let stt = 1, i = active - 1; i >= 0; i--, stt++) {
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

const next = document.getElementById('next');
const prev = document.getElementById('prev');

if (next) {
    next.onclick = () => {
        active = active + 1 < items.length ? active + 1 : 0; // Wrap around to the first item
        loadShow();
    };
}

if (prev) {
    prev.onclick = () => {
        active = active - 1 >= 0 ? active - 1 : items.length - 1; // Wrap around to the last item
        loadShow();
    };
}

function randomColor(type) {
  var c;
  if (type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
