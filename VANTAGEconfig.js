
let isInterior = false;
var selectedColor = "black"
function openExteriorMenu() {
    isInterior=false;
    document.getElementById("exterior-menu").style.display = "block";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
    changeBackgroundImage(currentColor);
  }

var selectedcolorint = "black";
  function openInteriorMenu() {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('Vantageimg/${currentColorint}/int/Vantage-1-${currentColorint}.jpeg')`;
    document.getElementById("interior-menu").style.display = "block";
    document.getElementById("exterior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
    isInterior = true;
  }
  function preview() {
    const prevBtn = document.getElementById('prev-btn');
    const BacktomenuBtn = document.getElementById('backtomenu');
    const extmenu = document.getElementById("exterior-menu");
    const intmenu = document.getElementById("interior-menu");
    const sidebar = document.getElementById("sidebar");
    const extpreview =document.getElementById("exterior-preview");
    const intpreview =document.getElementById("interior-preview");
    extmenu.style.display = "none";
    intmenu.style.display = "none";
    sidebar.style.display = "none";
    prevBtn.style.transition = "left 0.3s";
    prevBtn.style.left = '10px';
    BacktomenuBtn.style.transition = "display 0.8s"; 
    BacktomenuBtn.style.display = 'flex';
    extpreview.style.display='flex';
    intpreview.style.display='flex';
  }
  
  function backtomenu(){
    const prevBtn = document.getElementById('prev-btn');
    const BacktomenuBtn = document.getElementById('backtomenu');
    const extpreview =document.getElementById("exterior-preview");
    const intpreview =document.getElementById("interior-preview");
    document.getElementById("sidebar").style.display = "block";
    BacktomenuBtn.style.transition = "display 0.3s"; 
    BacktomenuBtn.style.display = 'none';
    prevBtn.style.transition = "left 0.2s"; 
    prevBtn.style.left = '250px';
    extpreview.style.display='none';
    intpreview.style.display='none';
  }
  function changeBackgroundImage(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('Vantageimg/${color}/ext/Vantage-1-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('Vantageimg/${color}/int/Vantage-1-${color}.jpeg')`;
    selectedcolorint=color;
  }
 
 function previewinterior(){
    isInterior = true;
    changeBackgroundImage1(currentColorint);
 }
 function previewexterior(){
    isInterior = false;
    changeBackgroundImage(currentColor);
    
 }


carImages = [
    "Vantageimg/black/ext/Vantage-1-black.jpeg",
    "Vantageimg/black/ext/Vantage-2-black.jpeg",
    "Vantageimg/black/ext/Vantage-3-black.jpeg",
    "Vantageimg/black/ext/Vantage-4-black.jpeg",
    "Vantageimg/black/ext/Vantage-5-black.jpeg",
    "Vantageimg/black/ext/Vantage-6-black.jpeg",
    "Vantageimg/black/ext/Vantage-7-black.jpeg",
    "Vantageimg/black/ext/Vantage-8-black.jpeg",
    "Vantageimg/black/ext/Vantage-9-black.jpeg"
];

let currentImageIndex = 0;
let currentColor = "black";
function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('Vantageimg/${color}/ext/Vantage-1-${color}.jpeg')`;

    carImages = [
        `Vantageimg/${currentColor}/ext/Vantage-1-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-2-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-3-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-4-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-5-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-6-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-7-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-8-${currentColor}.jpeg`,
        `Vantageimg/${currentColor}/ext/Vantage-9-${currentColor}.jpeg`
    ];
}
carintimages = [
    "Vantageimg/black/int/Vantage-1-black.jpeg",
    "Vantageimg/black/int/Vantage-2-black.jpeg",
    "Vantageimg/black/int/Vantage-3-black.jpeg",
    "Vantageimg/black/int/Vantage-4-black.jpeg",
];
let currentColorint="black";
function selectColorInt(color) {
    currentColorint = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('Vantageimg/${currentColorint}/int/Vantage-1-${currentColorint}.jpeg')`;

    carintimages = [
        `Vantageimg/${currentColorint}/int/Vantage-1-${currentColorint}.jpeg`,
        `Vantageimg/${currentColorint}/int/Vantage-2-${currentColorint}.jpeg`,
        `Vantageimg/${currentColorint}/int/Vantage-3-${currentColorint}.jpeg`,
        `Vantageimg/${currentColorint}/int/Vantage-4-${currentColorint}.jpeg`
      ];
}

function nextimg() {
    const backgroundImage = document.getElementById("background-image");
  if (!isInterior) {
    currentImageIndex = (currentImageIndex + 1) % carImages.length;
    backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
  } else {
    currentImageIndex = (currentImageIndex + 1) % carintimages.length;
    backgroundImage.style.backgroundImage = `url('${carintimages[currentImageIndex]}')`;
  }
}
function previmg() {
    const backgroundImage = document.getElementById("background-image");
    if (!isInterior) {
        currentImageIndex = (currentImageIndex - 1 + carImages.length) % carImages.length;
        backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
      } 
      else {
        currentImageIndex = (currentImageIndex - 1 + carImages.length) % carintimages.length;
      backgroundImage.style.backgroundImage = `url('${carintimages[currentImageIndex]}')`;
      }
} 






const backButton = document.querySelector('.back-button');
backButton.addEventListener('click', () => {
  document.getElementById("interior-menu").style.display = "none";
  document.getElementById("exterior-menu").style.display = "none";
  document.getElementById("sidebar").style.display = "block";
});


const intbackButton = document.querySelector('.int-button');
intbackButton.addEventListener('click', () => {
  document.getElementById("interior-menu").style.display = "none";
  document.getElementById("exterior-menu").style.display = "none";
  document.getElementById("sidebar").style.display = "block";
  changeBackgroundImage(currentColor)
  isInterior=false;
});
