const pathname = window.location.pathname;
const car = pathname.split("/").pop();

const carConfig = {
    "dbx707": ["black", "green", "orange", "silver"],
    "vantage": ["black", "blue", "bronze", "green"],
    "valour": ["black", "blue", "green", "red"],
    "dbs": ["black", "blue", "red", "silver"],
    "db12": ["green","gray", "purple", "red"]
};



let isInterior = false;
var selectedColor = carConfig[car][0];
function openExteriorMenu() {
    isInterior=false;
    document.getElementById("exterior-menu").style.display = "block";
    document.getElementById("interior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
    changeBackgroundImage(currentColor);
  }

var selectedcolorint = carConfig[car][1];
  function openInteriorMenu() {
    const backgroundImage = document.getElementById("background-image");  
    backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${currentColorint}/int/${currentColorint}-1.jpeg')`;
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
    backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${color}/ext/${color}-1.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image"); 
    backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${color}/int/${color}-1.jpeg')`;
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
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-1.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-2.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-3.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-4.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-5.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-6.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-7.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-8.jpeg`,
    `/assets/config/${car}/${selectedColor}/ext/${selectedColor}-9.jpeg`
];

let currentImageIndex = 0;
let currentColor = carConfig[car][0];
function selectColor(color) {
    currentColor = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image");   
    backgroundImage.style.backgroundImage = `url('DB12img/${color}/ext/DB12-1-${color}.jpeg')`;

    carImages = [
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-1.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-2.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-3.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-4.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-5.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-6.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-7.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-8.jpeg`,
        `/assets/config/${car}/${currentColor}/ext/${currentColor}-9.jpeg`
    ];

    console.log(`Selected color: ${currentColor}`);
     console.log(`Car images: ${carImages}`);
}
carintimages = [
    `/assets/config/${car}/${selectedcolorint}/int/${selectedcolorint}-1.jpeg`,
    `/assets/config/${car}/${selectedcolorint}/int/${selectedcolorint}-2.jpeg`,
    `/assets/config/${car}/${selectedcolorint}/int/${selectedcolorint}-3.jpeg`,
    `/assets/config/${car}/${selectedcolorint}/int/${selectedcolorint}-4.jpeg`
];
let currentColorint="grey";
function selectColorInt(color) {
    currentColorint = color;
    currentImageIndex = 0;
    const backgroundImage = document.getElementById("background-image"); 
    backgroundImage.style.backgroundImage = `url('DB12img/${currentColorint}/int/DB12-1-${currentColorint}.jpeg')`;

    carintimages = [
        `/assets/config/${car}/${currentColorint}/int/${currentColorint}-1.jpeg`,
        `/assets/config/${car}/${currentColorint}/int/${currentColorint}-2.jpeg`,
        `/assets/config/${car}/${currentColorint}/int/${currentColorint}-3.jpeg`,
        `/assets/config/${car}/${currentColorint}/int/${currentColorint}-4.jpeg`
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


