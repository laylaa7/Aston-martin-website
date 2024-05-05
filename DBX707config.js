
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
    backgroundImage.style.backgroundImage = `url('DBXimg/${currentColorint}/int/DBX707-1-${currentColorint}.jpeg')`;
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
    backgroundImage.style.backgroundImage = `url('DBXimg/${color}/ext/DBX707-1-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBXimg/${color}/int/DBX707-1-${color}.jpeg')`;
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
    "DBXimg/orange/ext/DBX707-1-orange.jpeg",
    "DBXimg/orange/ext/DBX707-2-orange.jpeg",
    "DBXimg/orange/ext/DBX707-3-orange.jpeg",
    "DBXimg/orange/ext/DBX707-4-orange.jpeg",
    "DBXimg/orange/ext/DBX707-5-orange.jpeg",
    "DBXimg/orange/ext/DBX707-6-orange.jpeg",
    "DBXimg/orange/ext/DBX707-7-orange.jpeg",
    "DBXimg/orange/ext/DBX707-8-orange.jpeg"
];

let currentImageIndex = 0;
let currentColor = "orange";
function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");  
    backgroundImage.style.backgroundImage = `url('DBXimg/${color}/ext/DBX707-1-${color}.jpeg')`;

    carImages = [
        `DBXimg/${currentColor}/ext/DBX707-1-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-2-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-3-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-4-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-5-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-6-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-7-${currentColor}.jpeg`,
        `DBXimg/${currentColor}/ext/DBX707-8-${currentColor}.jpeg`
    ];

    console.log(`Selected color: ${currentColor}`);
     console.log(`Car images: ${carImages}`);
}
carintimages = [
    "DBXimg/orange/int/DBX707-1-orange.jpeg",
    "DBXimg/orange/int/DBX707-2-orange.jpeg",
    "DBXimg/orange/int/DBX707-3-orange.jpeg",
    "DBXimg/orange/int/DBX707-4-orange.jpeg"
];
let currentColorint="orange";
function selectColorInt(color) {
    currentColorint = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image"); 
    backgroundImage.style.backgroundImage = `url('DBXimg/${currentColorint}/int/DBX707-1-${currentColorint}.jpeg')`;

    carintimages = [
        `DBXimg/${currentColorint}/int/DBX707-1-${currentColorint}.jpeg`,
        `DBXimg/${currentColorint}/int/DBX707-2-${currentColorint}.jpeg`,
        `DBXimg/${currentColorint}/int/DBX707-3-${currentColorint}.jpeg`,
        `DBXimg/${currentColorint}/int/DBX707-4-${currentColorint}.jpeg`
      ];

      console.log(`Selected color: ${currentColorint}`);
     console.log(`Car images: ${carintimages}`);
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
