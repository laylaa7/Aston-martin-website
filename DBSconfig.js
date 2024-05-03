

var selectedColor = "black"
function openExteriorMenu() {
    
    document.getElementById("exterior-menu").style.display = "block";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
  }

var selectedcolorint = "black";
  function openInteriorMenu() {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${selectedcolorint}/DBS-int-1-${selectedcolorint}.jpeg')`;
    document.getElementById("interior-menu").style.display = "block";
    document.getElementById("exterior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
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
    backgroundImage.style.backgroundImage = `url('DBSimg/${color}/DBS-1-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${color}/DBS-int-1-${color}.jpeg')`;
    selectedcolorint=color;
  }
 
 

const carintimages = [
    "DBSimg/black/DBS-int-1-black.jpeg",
    "DBSimg/black/DBS-int-2-black.jpeg",
    "DBSimg/black/DBS-int-3-black.jpeg",
    "DBSimg/black/DBS-int-4-black.jpeg",
];

const carImages = [
    "DBSimg/black/ext/DBS-1-black.jpeg",
    "DBSimg/black/ext/DBS-2-black.jpeg",
    "DBSimg/black/ext/DBS-3-black.jpeg",
    "DBSimg/black/ext/DBS-4-black.jpeg",
    "DBSimg/black/ext/DBS-5-black.jpeg",
    "DBSimg/black/ext/DBS-6-black.jpeg",
    "DBSimg/black/ext/DBS-7-black.jpeg",
    "DBSimg/black/ext/DBS-8-black.jpeg"
];
function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");
    
    // Update the background image based on whether it's interior or exterior
    backgroundImage.style.backgroundImage = `url('DBSimg/${currentColor}/ext/DBS-1-${currentColor}.jpeg')`;

    // Update the arrays based on whether it's interior or exterior
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

    carintimages = [
        `DBSimg/${currentColor}/DBS-int-1-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-int-2-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-int-3-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-int-4-${currentColor}.jpeg`
    ];
}


let isInterior = true; // Flag to determine if it's interior or exterior
let currentImageIndex = 0;
let currentColor = "black";
function nextimg() {
    const backgroundImage = document.getElementById("background-image");
    currentImageIndex = (currentImageIndex + 1) % carImages.length;
    backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
}
function previmg() {
    const backgroundImage = document.getElementById("background-image");
    currentImageIndex = (currentImageIndex - 1 + carImages.length) % carImages.length;
    backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
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
  
});
