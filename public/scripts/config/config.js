// document.addEventListener('DOMContentLoaded', () => {
  // Extract the car model from the URL path
  const pathname = window.location.pathname;
  const car = pathname.split("/").pop();

  document.getElementById("enquire-button").onclick = () => {
    window.location = `/models/enquire/${car}`
  }

  // Define the car configuration
  const carConfig = {
      "dbx707": ["black", "green", "orange", "silver"],
      "vantage": ["black", "blue", "bronze", "green"],
      "valour": ["black", "blue", "green", "red"],
      "dbs": ["black", "blue", "red", "silver"],
      "db12": ["green", "grey", "purple", "red"]
  };

  // Function to set the car model name in the HTML
  function setCarModelName(car) {
      const carModelElement = document.getElementById('car-model');
      if (carModelElement) {
          carModelElement.textContent = car;
      }
  }
  const backgroundImageElement = document.getElementById('background-image');
            if (backgroundImageElement && carConfig[car]) {
                const initialColor = carConfig[car][0];
                backgroundImageElement.style.backgroundImage = `url('/assets/config/${car}/${initialColor}/ext/${initialColor}-1.jpeg')`;
            }


  // Initialize the car model name
  setCarModelName(car);

  let isInterior = false;
  var selectedColor = carConfig[car][0];

  function openExteriorMenu() {
      isInterior = false;
      document.getElementById("exterior-menu").style.display = "block";
      document.getElementById("interior-menu").style.display = "none";
      document.getElementById("sidebar").style.display = "none";
      changeBackgroundImage(selectedColor);
  }

  const openexterior = document.getElementById('ext');
  if(openexterior){
    openexterior.addEventListener('click',openExteriorMenu);
  }

  let selectedColorInt = carConfig[car][1];

  function openInteriorMenu() {
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${selectedColorInt}/int/${selectedColorInt}-1.jpeg')`;
      document.getElementById("interior-menu").style.display = "block";
      document.getElementById("exterior-menu").style.display = "none";
      document.getElementById("sidebar").style.display = "none";
      isInterior = true;
  }
  const openinterior= document.getElementById('int');
  if(openinterior){
    openinterior.addEventListener('click',openInteriorMenu);
  }


  function preview() {
      const prevBtn = document.getElementById('prev-btn');
      const BacktomenuBtn = document.getElementById('backtomenu');
      const extmenu = document.getElementById("exterior-menu");
      const intmenu = document.getElementById("interior-menu");
      const sidebar = document.getElementById("sidebar");
      const extpreview = document.getElementById("exterior-preview");
      const intpreview = document.getElementById("interior-preview");
      extmenu.style.display = "none";
      intmenu.style.display = "none";
      sidebar.style.display = "none";
      prevBtn.style.transition = "left 0.3s";
      prevBtn.style.left = '10px';
      BacktomenuBtn.style.transition = "display 0.8s";
      BacktomenuBtn.style.display = 'flex';
      extpreview.style.display = 'flex';
      intpreview.style.display = 'flex';
  }

  

  function changeBackgroundImage(color) {
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${color}/ext/${color}-1.jpeg')`;
      selectedColor = color;
  }

  function changeBackgroundImage1(color) {
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${color}/int/${color}-1.jpeg')`;
      selectedColorInt = color;
  }

  function previewinterior() {
      isInterior = true;
      changeBackgroundImage1(currentColorInt);
  }

  const prevint = document.getElementById('interior-preview');
  if(prevint){
    prevint.addEventListener('click',previewinterior);
  }
  
  function previewexterior() {
      isInterior = false;
      changeBackgroundImage(selectedColor);
  }

  const prevext = document.getElementById('exterior-preview');
  if(prevext){
    prevext.addEventListener('click',previewexterior);
  }


  let carImages = [ 
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
      selectedColor = color
      currentImageIndex = 0;
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${currentColor}/ext/${currentColor}-1.jpeg')`;

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

  let carIntImages = [
      `/assets/config/${car}/${selectedColorInt}/int/${selectedColorInt}-1.jpeg`,
      `/assets/config/${car}/${selectedColorInt}/int/${selectedColorInt}-2.jpeg`,
      `/assets/config/${car}/${selectedColorInt}/int/${selectedColorInt}-3.jpeg`,
      `/assets/config/${car}/${selectedColorInt}/int/${selectedColorInt}-4.jpeg`
  ];

  var currentColorInt = carConfig[car][1];

  function selectColorInt(color) {
      currentColorInt = color;
      currentImageIndex = 0;
      const backgroundImage = document.getElementById("background-image");
      backgroundImage.style.backgroundImage = `url('/assets/config/${car}/${currentColorInt}/int/${currentColorInt}-1.jpeg')`;

      carIntImages = [
          `/assets/config/${car}/${currentColorInt}/int/${currentColorInt}-1.jpeg`,
          `/assets/config/${car}/${currentColorInt}/int/${currentColorInt}-2.jpeg`,
          `/assets/config/${car}/${currentColorInt}/int/${currentColorInt}-3.jpeg`,
          `/assets/config/${car}/${currentColorInt}/int/${currentColorInt}-4.jpeg`
      ];

      console.log(`Selected color: ${currentColorInt}`);
      console.log(`Car images: ${carIntImages}`);
  }

  function nextimg() {
      const backgroundImage = document.getElementById("background-image");
      if (!isInterior) {
          currentImageIndex = (currentImageIndex + 1) % carImages.length;
          backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
      } else {
          currentImageIndex = (currentImageIndex + 1) % carIntImages.length;
          backgroundImage.style.backgroundImage = `url('${carIntImages[currentImageIndex]}')`;
      }
  }

  function previmg() {
      const backgroundImage = document.getElementById("background-image");
      if (!isInterior) {
          currentImageIndex = (currentImageIndex - 1 + carImages.length) % carImages.length;
          if (currentImageIndex === carImages.length) currentImageIndex = 0;
          backgroundImage.style.backgroundImage = `url('${carImages[currentImageIndex]}')`;
      } else {
          currentImageIndex = (currentImageIndex - 1 + carIntImages.length) % carIntImages.length;
          if (currentImageIndex === carIntImages.length) currentImageIndex = 0;
          backgroundImage.style.backgroundImage = `url('${carIntImages[currentImageIndex]}')`;
      }
  }

  const nextButton = document.getElementById('next-btn');
    if (nextButton) {
        nextButton.addEventListener('click', nextimg);
    }

    const prevButton = document.getElementById('prev-btn');
    if (prevButton) {
        prevButton.addEventListener('click', previmg);
    }

    const menubtn = document.getElementById('preview');
    if(menubtn){
        menubtn.addEventListener('click',preview);
    }

    const backmenu = document.getElementById('backtomenu');
    if (backmenu) {
        backmenu.addEventListener('click', backtomenu);
    }
function backtomenu() {
    const prevBtn = document.getElementById('prev-btn');
    const BacktomenuBtn = document.getElementById('backtomenu');
    const extpreview = document.getElementById("exterior-preview");
    const intpreview = document.getElementById("interior-preview");
    document.getElementById("sidebar").style.display = "block";
    BacktomenuBtn.style.transition = "display 0.3s";
    BacktomenuBtn.style.display = 'none';
    prevBtn.style.transition = "left 0.2s";
    prevBtn.style.left = '250px';
    extpreview.style.display = 'none';
    intpreview.style.display = 'none';
}
  
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
      document.getElementById("interior-menu").style.display = "none";
      document.getElementById("exterior-menu").style.display = "none";
      document.getElementById("sidebar").style.display = "block";
  });


  // change model
  document.getElementById('changemodel').addEventListener('click', function() {
    window.location.href = '/models/cars';
  });
  
  
  const intBackButton = document.querySelector('.int-button');
  intBackButton.addEventListener('click', () => {
      document.getElementById("interior-menu").style.display = "none";
      document.getElementById("exterior-menu").style.display = "none";
      document.getElementById("sidebar").style.display = "block";
  });

  // Add click event listener to the car-model element
  const carModelElement = document.getElementById('car-model');
  if (carModelElement) {
      carModelElement.addEventListener('click', preview);
  }
  const colors_ext = document.getElementById("color-options-ext")
var ext_html = ''
carConfig[car].map((color) => {
    ext_html += `
    <label for="color-${color}">
    <input onclick="selectColor('${color}')" type="image" src="/assets/config/${car}/${color}/${color}-ext.jpeg">
    </label>
    `
})

colors_ext.innerHTML = ext_html

const colors_int = document.getElementById("color-options-int")
var int_html = ''
carConfig[car].map((color) => {
    int_html += `
    <label for="color-${color}">
    <input onclick="selectColorInt('${color}')" type="image" src="/assets/config/${car}/${color}/${color}-int.jpeg">
    </label>
    `
})

colors_int.innerHTML = int_html
// });


