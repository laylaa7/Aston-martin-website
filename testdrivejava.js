const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");

const submitBtn = document.querySelector("submitBtn");
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


    if (!validModels.includes(selectedModel)) {
        document.getElementById('carModel').setCustomValidity('Please select a valid car model.');
        alert("Please Select a Valid Car Model");
    }

    
    if (cityFound && validModels.includes(selectedModel)) {
        document.getElementById('cityInput').setCustomValidity('');
        document.getElementById('carModel').setCustomValidity('');
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

document.getElementById('submitBtn').onclick = function() { 
    
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
    
      
        if (!valid) {
            event.preventDefault();
        }
        else{
            alert("Submitted! A retailer will contact you soon!");
            location.reload();

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

