var selectedRow = null;

function showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// delete data
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        showAlert("User Data Deleted", "danger");
    }
});

// clear all fields
function clearfields() {
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#telephone").value = "";
    document.querySelector("#cityInput").value = "";
    document.querySelector("#carModel").value = "";
}

// add data
document.querySelector("#user-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // get form values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    const number = document.querySelector("#telephone").value;
    const cityInput = document.querySelector("#cityInput").value;
    const carModel = document.querySelector("#carModel").value;

    // validate
    if (firstName === "" || lastName === "" || email === "" || number === "" || cityInput === "" || carModel === "") {
        showAlert("Please fill in all fields", "danger");
    } else {
        if (selectedRow == null) {
            const list = document.querySelector("#user-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${email}</td>
                <td>${number}</td>
                <td>${cityInput}</td>
                <td>${carModel}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            `;
            list.appendChild(row);
            showAlert("User Added successfully", "success");
        } else {
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = email;
            selectedRow.children[3].textContent = number;
            selectedRow.children[4].textContent = cityInput;
            selectedRow.children[5].textContent = carModel;

            showAlert("User Information Edited", "info");
        }
        clearfields();
        selectedRow = null;
        document.getElementById('user-form').style.display = 'none';
    }
});

// edit data
document.querySelector("#user-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        selectedRow = e.target.parentElement.parentElement;
        document.querySelector("#firstName").value = selectedRow.children[0].textContent;
        document.querySelector("#lastName").value = selectedRow.children[1].textContent;
        document.querySelector("#email").value = selectedRow.children[2].textContent;
        document.querySelector("#telephone").value = selectedRow.children[3].textContent;
        document.querySelector("#cityInput").value = selectedRow.children[4].textContent;
        document.querySelector("#carModel").value = selectedRow.children[5].textContent;
        document.getElementById('user-form').style.display = 'block';
    }
});

document.getElementById('user-form').style.display = 'none';

document.getElementById('submit').onclick = function(event) {
    event.preventDefault();
    var valid = true;

    var firstNameInput = document.getElementById('firstName');
    var firstNameRegex = /^[A-Za-z]+$/;
    if (firstNameInput.value.trim() === '' || !firstNameRegex.test(firstNameInput.value.trim())) {
        alert("Please enter a valid first name.");
        valid = false;
        return false;
    }

    var lastNameInput = document.getElementById('lastName');
    var lastNameRegex = /^[A-Za-z]+$/;
    if (lastNameInput.value.trim() === '' || !lastNameRegex.test(lastNameInput.value.trim())) {
        alert("Please enter a valid last name.");
        valid = false;
        return false;
    }

    var emailInput = document.getElementById('email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        valid = false;
        return false;
    }

    var numberInput = document.getElementById('telephone');
    var numberRegex = /^[0-9]{10}$/;
    if (numberInput.value.trim() === '' || !numberRegex.test(numberInput.value.trim())) {
        alert("Please enter a valid 10-digit telephone number.");
        valid = false;
        return false;
    }

    var cityInput = document.getElementById('cityInput');
    if (cityInput.value.trim() === '') {
        alert("Please enter a valid city.");
        valid = false;
        return false;
    }

    var carModelInput = document.getElementById('carModel');
    var validModels = ['VALOUR', 'DBS', 'VANTAGE', 'DBX707', 'DB12'];
    if (
        carModelInput.value.trim() === '' ||
        !validModels.includes(carModelInput.value.trim().toUpperCase())
    ) {
        alert("Please enter a valid car model.");
        valid = false;
        return false;
    }

    if (valid) {
        document.querySelector("#user-form").submit();
    }
};

// code to fetch history data into database
$(document).ready(function() {
    $('#reservationForm').on('submit', function(event) {
        event.preventDefault();
        const formData = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            email: $('#email').val(),
            telephone: $('#telephone').val(),
            time: $('input[name="time"]:checked').val(),
            carModel: $('#carModel').val(),
            cityInput: $('#cityInput').val()
        };

        $.ajax({
            url: '/api/reservation',
            type: 'POST',
            data: formData,
            success: function(response) {
                alert('Reservation saved successfully!');
                // Optionally, redirect to a confirmation page
            },
            error: function(error) {
                alert('Failed to save reservation. Please try again.');
            }
        });
    });
});
