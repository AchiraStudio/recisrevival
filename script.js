document.addEventListener('DOMContentLoaded', () => {


  function changeColor(element) {
      setInterval(() => {
          let randomColor = getRandomColor();
          if (element) {
              element.style.color = randomColor;
              element.style.textShadow = `
                  0 0 0px ${randomColor},
                  0 0 0px ${randomColor},
                  0 0 0px ${randomColor},
                  0 0 0px ${randomColor},
                  0 0 0px ${randomColor},
                  0 0 0px ${randomColor}
              `;
          }
      }, 800); // change color every 0.8 seconds
  }

  // Apply the color change function to each element if it exists
  h1Elements.forEach(element => {
      if (element) changeColor(element);
  });
});


function playMinecraft() {
  window.location.href = "assets/minecraft/EaglercraftX_1.8_u31_Offline_Signed.html";
}

function showSurprise() {

}

const info = document.querySelector('#info');
const window1 = document.querySelector('#one');
const window2 = document.querySelector('#two');
const window3 = document.querySelector('#three');
const window4 = document.querySelector('#four');

//Background
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomBackgrounds() {
  for (let i = 1; i <= 99999; i++) {
      const div = document.getElementById(i.toString());
      if (div) {
          const bgColor = getRandomColor();
          div.style.backgroundColor = bgColor;
          div.style.boxShadow = `
      0 0 2px ${bgColor}, 
      0 0 10px ${bgColor}, 
      0 0 20px ${bgColor}, 
      0 0 30px ${bgColor},
      0 0 40px ${bgColor}, 
      0 0 50px ${bgColor}
    `;
      }
  }
}

function adjustLinks() {
  if (window.innerWidth <= 431) {
    document.querySelector('a[href="#main"]').setAttribute('href', '#main');
    document.querySelector('a[href="#games"]').setAttribute('href', '#games');
    document.querySelector('a[href="#comps"]').setAttribute('href', '#compsan');
    document.querySelector('a[href="#artis"]').setAttribute('href', '#artisan');
    document.querySelector('a[href="#merch"]').setAttribute('href', '#merch');
  } else {
    document.querySelector('a[href="#main"]').setAttribute('href', '#main');
    document.querySelector('a[href="#games"]').setAttribute('href', '#games');
    document.querySelector('a[href="#compsan"]').setAttribute('href', '#comps');
    document.querySelector('a[href="#artisan"]').setAttribute('href', '#artis');
    document.querySelector('a[href="#merch"]').setAttribute('href', '#merch');
  }
}

// Run the function when the page loads and when the window is resized
window.addEventListener('load', adjustLinks);
window.addEventListener('resize', adjustLinks);


window.onload = setRandomBackgrounds;

function unavailable() {
  window.location.href = "extra/unavailable.html"
}

function mainDown() {
  window.location.href = "#artis"
  window.location.href = "#artisan"
}

function gotoHome() {
  window.location.href = "#main"
}

function gotoAbout() {
  window.location.href = "#about"
}

function gotoGames() {
  window.location.href = "#games"
}

const header = document.getElementsByClassName('header');
const hideHeight = 100; // Adjust the height at which the header should hide

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > hideHeight) {
      header.style.top = '-60px'; // Adjust according to header height
  } else {
      header.style.top = '0';
  }
});