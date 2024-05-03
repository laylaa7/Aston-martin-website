
let isInterior = false;
var selectedColor = "black"
function openExteriorMenu() {
    isInterior=false;
    document.getElementById("exterior-menu").style.display = "block";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
  }

var selectedcolorint = "black";
  function openInteriorMenu() {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${currentColorint}/int/DBS-1-${currentColorint}.jpeg')`;
    document.getElementById("interior-menu").style.display = "block";
    document.getElementById("exterior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
    isInterior = true;
  }
  function preview() {
    const prevBtn = document.getElementById('prev-btn');
    document.getElementById("exterior-menu").style.display = "none";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
    prevBtn.style.left = '10px';
  }
  
  function changeBackgroundImage(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${color}/ext/DBS-1-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${color}/int/DBS-1-${color}.jpeg')`;
    selectedcolorint=color;
  }
 
 



carImages = [
    "DBSimg/black/ext/DBS-1-black.jpeg",
    "DBSimg/black/ext/DBS-2-black.jpeg",
    "DBSimg/black/ext/DBS-3-black.jpeg",
    "DBSimg/black/ext/DBS-4-black.jpeg",
    "DBSimg/black/ext/DBS-5-black.jpeg",
    "DBSimg/black/ext/DBS-6-black.jpeg",
    "DBSimg/black/ext/DBS-7-black.jpeg",
    "DBSimg/black/ext/DBS-8-black.jpeg"
];

let currentImageIndex = 0;
let currentColor = "black";
function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${currentColor}/ext/DBS-1-${currentColor}.jpeg')`;

    carImages = [
        `DBSimg/${currentColor}/ext/DBS-1-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-2-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-3-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-4-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-5-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-6-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-7-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/ext/DBS-8-${currentColor}.jpeg`
    ];
}
carintimages = [
    "DBSimg/black/int/DBS-1-black.jpeg",
    "DBSimg/black/int/DBS-2-black.jpeg",
    "DBSimg/black/int/DBS-3-black.jpeg",
    "DBSimg/red/int/DBS-4-red.jpeg",
];
let currentColorint="black";
function selectColorInt(color) {
    currentColorint = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${currentColorint}/int/DBS-1-${currentColorint}.jpeg')`;

    carintimages = [
        `DBSimg/${currentColorint}/int/DBS-1-${currentColorint}.jpeg`,
        `DBSimg/${currentColorint}/int/DBS-2-${currentColorint}.jpeg`,
        `DBSimg/${currentColorint}/int/DBS-3-${currentColorint}.jpeg`,
        `DBSimg/${currentColorint}/int/DBS-4-${currentColorint}.jpeg`
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
