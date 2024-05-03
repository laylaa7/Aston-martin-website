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
    backgroundImage.style.backgroundImage = `url('DBSimg/DBS-int-black.jpeg')`;
    document.getElementById("interior-menu").style.display = "block";
    document.getElementById("exterior-menu").style.display = "none";
    document.getElementById("sidebar").style.display="none";
  }
  
  function changeBackgroundImage(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/DBS-${color}.jpeg')`;
    selectedColor = color
  }
  function changeBackgroundImage1(color) {
    const backgroundImage = document.getElementById("background-image");
    backgroundImage.style.backgroundImage = `url('DBSimg/DBS-int-${color}.jpeg')`;
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
  changeBackgroundImage(selectedColor)
});
