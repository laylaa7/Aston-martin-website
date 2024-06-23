const pathname = window.location.pathname;
  const car = pathname.split("/").pop();
function setCarModelName(car) {
    const carModelElement = document.getElementById('carModel');
    if (carModelElement) {
        carModelElement.textContent = car;
    }
}

setCarModelName(car);



const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submitBtn");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

 document.getElementById('firstNext').onclick = function() {
    var cityInput = document.getElementById('cityInput').value.toLowerCase();
    var cityOptions = document.getElementById('brow').getElementsByTagName('option');
    var cityFound = false;


    for (var i = 0; i < cityOptions.length; i++) {
        if (cityOptions[i].value.toLowerCase() === cityInput) {
            cityFound = true;
            break;
        }
    }

    var selectedModel = document.getElementById('carModel').value;
    var validModels = ['model1', 'model2', 'model3', 'model4', 'model5']; // Add all valid model values here


    

    
    if (cityFound ) {
        document.getElementById('cityInput').setCustomValidity('');
        event.preventDefault();
        slidePage.style.marginLeft = "-25%";
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
    } else {
        if (!cityFound) {
            document.getElementById('cityInput').setCustomValidity('Please select a city from the list.');
            alert("Please Select a Valid City!");
        }
    }
};

document.getElementById('next-1').onclick = function() { 
     var radioButtons = document.getElementsByName('time');
     var radioChecked = false;

for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
        radioChecked = true;
        break;
    }
}

if (!radioChecked) {
    alert("Please select a time option.");
    return false;
}
else{
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
}

return true;
}

 document.getElementById('next-2').onclick = function() { 
    
        var valid = true;
    
       
        var titleSelect = document.getElementById('title');
        if (titleSelect.value === 'Select') {
            alert("Please select a title.");
            valid = false;
        }
    
      
        var firstNameInput = document.getElementById('firstName');
        if (firstNameInput.value.trim() === '') {
            alert("Please enter your first name.");
            valid = false;
        }
    
    
        var lastNameInput = document.getElementById('lastName');
        if (lastNameInput.value.trim() === '') {
            alert("Please enter your last name.");
            valid = false;
        }
    
      
        var telephoneInput = document.getElementById('telephone');
        var regex = /^[0-9]\d{10}$/;
        if (telephoneInput.value.trim() == '' || !regex.test(telephoneInput.value.trim())) {
            alert("Please enter a valid 10 digit telephone number.");
            valid = false;
        }
        console.log("Telephone value:", telephoneInput.value.trim());
        console.log("Regex test result:", regex.test(telephoneInput.value.trim()));


        
        var emailInput = document.getElementById('email');
        if (emailInput.value.trim() === '') {
            alert("Please enter your email address.");
            valid = false;
        }
    
      
        var emailOptIn = document.getElementById('emailOptIn').checked;
        var smsOptIn = document.getElementById('smsOptIn').checked;
        var phoneOptIn = document.getElementById('phoneOptIn').checked;
        if (!emailOptIn && !smsOptIn && !phoneOptIn) {
            alert("Please select at least one preferred contact method.");
            valid = false;
        }
        console.log("after verification");
      
        if (!valid) {
            event.preventDefault();
        }
        else{
            event.preventDefault();
            slidePage.style.marginLeft = "-75%";
            bullet[current - 1].classList.add("active");
            progressCheck[current - 1].classList.add("active");
            progressText[current - 1].classList.add("active");
            current += 1;

        }

    
}; 
document.getElementById('submitBtn').onclick = function() {
    var valid = true;

    var cardHolderInput = document.getElementById('card-holder');
    var cardHolderRegex = /^[A-Za-z\s]+$/; 
    if (cardHolderInput.value.trim() === '' || !cardHolderRegex.test(cardHolderInput.value.trim())) {
        alert("Please enter a valid card holder's name.");
        valid = false;
    }

    var cardNumberInput = document.getElementById('card-number');
    var cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/;
    if (cardNumberInput.value.trim() === '' || !cardNumberRegex.test(cardNumberInput.value.trim())) {
        alert("Please enter a valid card number.");
        valid = false;
    }

    var expiryDateInput = document.getElementById('expiry-date');
    var expiryDateRegex = /^(0[1-9]|1[0-2]) \/ ([0-9]{2})$/;
    if (expiryDateInput.value.trim() === '' || !expiryDateRegex.test(expiryDateInput.value.trim())) {
        alert("Please enter a valid expiry date in the format MM / YY.");
        valid = false;
    }

    var cvcInput = document.getElementById('cvc');
    var cvcRegex = /^\d{3}$/;
    if (cvcInput.value.trim() === '' || !cvcRegex.test(cvcInput.value.trim())) {
        alert("Please enter a valid CVC code.");
        valid = false;
    }

    if (!valid) {
         event.preventDefault();
        
    }
    else{
    alert("Successfully Reserved!");
    }
};

prevBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  document.getElementById("expiry-date").addEventListener("input", function() {
    // Get the input value and split it into month and year
    var inputValue = this.value;
    var parts = inputValue.split(" / ");
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[1], 10);

    // Get the expiry year relative to the current year
    var expiryYear = currentYear + Math.floor(month / 12);
    
    // Check if the expiry year is less than the current year or if the month is invalid
    if (year < currentYear || year > currentYear + 10 || month < 1 || month > 12) {
      document.getElementById("expiry-error").textContent = "Invalid expiry date";
    } else {
      document.getElementById("expiry-error").textContent = "";
    }
  });


