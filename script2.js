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
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    };
}

if (prev) {
    prev.onclick = () => {
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    };
}

// DiscoBall
var t = 1;
var radius = 50;
var squareSize = 6.5;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI-fuzzy)/prec;
var discoBall = document.getElementById("discoBall");

for(var t=fuzzy; t<Math.PI; t+=inc) {
  var z = radius * Math.cos(t);
  var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
  var circumference = Math.abs(2 * Math.PI * currentRadius);
  var squaresThatFit = Math.floor(circumference / squareSize);
  var angleInc = (Math.PI*2-fuzzy) / squaresThatFit;
  for(var i=angleInc/2+fuzzy; i<(Math.PI*2); i+=angleInc) {
    var square = document.createElement("div");
    var squareTile = document.createElement("div");
    squareTile.style.width = squareSize + "px";
    squareTile.style.height = squareSize + "px";
    squareTile.style.transformOrigin = "0 0 0";
    squareTile.style.webkitTransformOrigin = "0 0 0";
    squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    if((t>1.3 && t<1.9) || (t<-1.3 && t>-1.9)) {
      squareTile.style.backgroundColor = randomColor("bright");
    } else {
      squareTile.style.backgroundColor = randomColor("any");
    }
    square.appendChild(squareTile);
    square.className = "square";
    squareTile.style.webkitAnimation = "reflect 2s linear infinite";
    squareTile.style.webkitAnimationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.animation = "reflect 2s linear infinite";
    squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.backfaceVisibility = "hidden";
    var x = radius * Math.cos(i) * Math.sin(t);
    var y = radius * Math.sin(i) * Math.sin(t);
    square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    discoBall.appendChild(square);
  }
}

function randomColor(type) {
  var c;
  if(type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
