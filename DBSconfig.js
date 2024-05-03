// // const carImage = document.getElementById('car-image');
// // const colorOptions = document.querySelectorAll('#color-options input[type="radio"]');

// // colorOptions.forEach(option => {
// //   option.addEventListener('change', () => {
// //     const color = option.value;
// //     const imagePath = `DBSimg/DBS-${color}.jpeg`;
// //     carImage.src = imagePath;
// //   });
// // });
// const carImage = document.getElementById('background-image');
// const colorOptions = document.querySelectorAll('#color-options input[type="image"]');

// colorOptions.forEach(option => {
//   option.addEventListener('click', () => {
//     const color = option.value;
//     const imagePath = `DBSimg/DBS-${color}.jpeg`;
//     carImage.src = imagePath;
//   });
// });

var selectedColor = "black"
function openExteriorMenu() {
    document.getElementById("exterior-menu").style.display = "block";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
  }
  
  function openInteriorMenu() {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/black/DBS-int-black.jpeg')`;
    document.getElementById("interior-menu").style.display = "block";
    document.getElementById("exterior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
  }
  
  function changeBackgroundImage(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${color}/DBS-1-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${color}/DBS-int-${color}.jpeg')`;
  }
 
 
   carImages = [
    "DBSimg/black/DBS-1-black.jpeg",
    "DBSimg/black/DBS-2-black.jpeg",
    "DBSimg/black/DBS-3-black.jpeg",
    "DBSimg/black/DBS-4-black.jpeg",
    "DBSimg/black/DBS-5-black.jpeg",
    "DBSimg/black/DBS-6-black.jpeg",
    "DBSimg/black/DBS-7-black.jpeg",
    "DBSimg/black/DBS-8-black.jpeg"
];

function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/${currentColor}/DBS-1-${currentColor}.jpeg')`;
    carImages = [
        `DBSimg/${currentColor}/DBS-1-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-2-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-3-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-4-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-5-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-6-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-7-${currentColor}.jpeg`,
        `DBSimg/${currentColor}/DBS-8-${currentColor}.jpeg`
    ];
}
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
//   function nextimg() {
//     const backgroundImage = document.getElementById("background-image");
//     backgroundImage.style.backgroundImage = `url('DBSimg/DBS-front-black.jpeg')`;
//   }
//   function previmg() {
//     const backgroundImage = document.getElementById("background-image");
//     backgroundImage.style.backgroundImage = `url('DBSimg/DBS-black.jpeg')`;
//   }

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
