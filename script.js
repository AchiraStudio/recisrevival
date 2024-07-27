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

window.onload = setRandomBackgrounds;

function unavailable() {
  window.location.href = "extra/unavailable.html"
}

function shop() {
  window.location.href = "https://www.youtube.com/"
}