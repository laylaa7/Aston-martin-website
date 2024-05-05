
let isInterior = false;
var selectedColor = "black"
function openExteriorMenu() {
    isInterior=false;
    document.getElementById("exterior-menu").style.display = "block";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
    changeBackgroundImage(currentColor);
  }

var selectedcolorint = "green";
  function openInteriorMenu() {
    const backgroundImage = document.getElementById("background-image");  
    backgroundImage.style.backgroundImage = `url('Valourimg/${currentColorint}/int/Valour-1-${currentColorint}.jpeg')`;
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
    backgroundImage.style.backgroundImage = `url('Valourimg/${color}/ext/Valour-1-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image"); 
    backgroundImage.style.backgroundImage = `url('Valourimg/${color}/int/Valour-1-${color}.jpeg')`;
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
    "Valourimg/green/ext/Valour-1-green.jpeg",
    "Valourimg/green/ext/Valour-2-green.jpeg",
    "Valourimg/green/ext/Valour-3-green.jpeg",
    "Valourimg/green/ext/Valour-4-green.jpeg",
    "Valourimg/green/ext/Valour-5-green.jpeg",
    "Valourimg/green/ext/Valour-6-green.jpeg",
    "Valourimg/green/ext/Valour-7-green.jpeg",
    "Valourimg/green/ext/Valour-8-green.jpeg",
    "Valourimg/green/ext/Valour-9-green.jpeg"
];

let currentImageIndex = 0;
let currentColor = "green";
function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");   
    backgroundImage.style.backgroundImage = `url('Valourimg/${color}/ext/Valour-1-${color}.jpeg')`;

    carImages = [
        `Valourimg/${currentColor}/ext/Valour-1-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-2-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-3-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-4-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-5-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-6-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-7-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-8-${currentColor}.jpeg`,
        `Valourimg/${currentColor}/ext/Valour-9-${currentColor}.jpeg`
    ];

    console.log(`Selected color: ${currentColor}`);
     console.log(`Car images: ${carImages}`);
}
carintimages = [
    "Valourimg/black/int/Valour-1-black.jpeg",
    "Valourimg/black/int/Valour-2-black.jpeg",
    "Valourimg/black/int/Valour-3-black.jpeg",
    "Valourimg/black/int/Valour-4-black.jpeg"
];
let currentColorint="black";
function selectColorInt(color) {
    currentColorint = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image"); 
    backgroundImage.style.backgroundImage = `url('Valourimg/${currentColorint}/int/Valour-1-${currentColorint}.jpeg')`;

    carintimages = [
        `Valourimg/${currentColorint}/int/Valour-1-${currentColorint}.jpeg`,
        `Valourimg/${currentColorint}/int/Valour-2-${currentColorint}.jpeg`,
        `Valourimg/${currentColorint}/int/Valour-3-${currentColorint}.jpeg`,
        `Valourimg/${currentColorint}/int/Valour-4-${currentColorint}.jpeg`
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
      if (currentImageIndex === carImages.length) currentImageIndex = 0; 
      backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
    } else {
      currentImageIndex = (currentImageIndex - 1 + carintimages.length) % carintimages.length;
      if (currentImageIndex === carintimages.length) currentImageIndex = 0;
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
