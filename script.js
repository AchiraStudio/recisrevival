document.addEventListener('DOMContentLoaded', () => {
    const h1Elements = [
      document.querySelector('#wide-screen #main .text #front'),
      document.querySelector('#wide-screen #vmenu .title h1'),
      document.querySelector('#wide-screen #about .title h1'),
      document.querySelector('#wide-screen #games h1'),
      document.querySelector('#wide-screen #schedule .title h1'),
      document.querySelector('#wide-screen #shop .title h1')
    ];
  
    let colors = [
        '#FF69B4', '#FFC107', '#FFD700', '#FFFF00', '#33CC33',
        '#00FFFF', '#66CCCC', '#FF99CC', '#FFA07A', '#FFC0CB',
        '#ADD8E6', '#7FFD00', '#FF69B4', '#FFA500', '#FFFF99',
        '#CCFF00', '#33FF00', '#00FF00', '#66FF00', '#CCFFFF',
        '#99FF99', '#66CCCC', '#33CCCC', '#0099FF', '#0066FF',
        '#0033FF'
    ];
  
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
  
    function changeColor(element) {
        setInterval(() => {
            let randomColor = getRandomColor();
            if (element) {
                element.style.color = randomColor;
                element.style.textShadow = `
                    0 0 2px ${randomColor},
                    0 0 2px ${randomColor},
                    0 0 2px ${randomColor},
                    0 0 2px ${randomColor},
                    0 0 2px ${randomColor},
                    0 0 2px ${randomColor}
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
  for (let i = 1; i <= 8; i++) {
      const div = document.getElementById(i.toString());
      if (div) {
          div.style.backgroundColor = getRandomColor();
      }
  }
}

window.onload = setRandomBackgrounds;