var selectedRow = null;
 
function showAlert(message,className){
    const div=document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main=document.querySelector(".main");
    container.insertBefore(div,main);
    setTimeout(()=> document.querySelector(".alert").remove(), 3000);
} 


//delete data
document.addEventListener("click", function(e) {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
        showAlert("User Data Deleted", "danger");
    }
});


//clear all fields
function clearfields(){
    document.querySelector("#firstName").value ="";
    document.querySelector("#lastName").value ="";
    document.querySelector("#email").value ="";
    document.querySelector("#number").value ="";
    document.querySelector("#date").value ="";
    document.querySelector("#model").value ="";
}

//Add Data
document.querySelector("#user-form").addEventListener("submit", (e)=>{
    e.preventDefault();


//Get form values
    const firstName= document.querySelector("#firstName").value;
    const lastName= document.querySelector("#lastName").value;
    const email= document.querySelector("#email").value;
    const number= document.querySelector("#number").value;
    const date= document.querySelector("#date").value;
    const model= document.querySelector("#model").value;

//validate
    if(firstName =="" || lastName=="" || email==""||number=="" || date=="" || model==""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow==null){
            const list=document.querySelector("#user-list");
            const row =document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${number}</td>
            <td>${date}</td>
            <td>${model}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
            `;
            list.appendChild(row);
            selectedRow=null;
            showAlert("User Added successfully", "success");
        }
        else{
            selectedRow.children[0].textContent= firstName;
            selectedRow.children[1].textContent= lastName;
            selectedRow.children[2].textContent= email;
            selectedRow.children[3].textContent= number;
            selectedRow.children[4].textContent= date;
            selectedRow.children[5].textContent= model;

            selectedRow=null;
            showAlert("User Information Edited", "info");
            document.getElementById('user-form').style.display='none';

        }
        clearfields();
    }
});
//edit data
document.querySelector("#user-list").addEventListener("click" ,(e)=>{

    const target = e.target; 
  document.getElementById('user-form').style.display='block'; 
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#lastName").value=selectedRow.children[1].textContent;
        document.querySelector("#email").value=selectedRow.children[2].textContent;
        document.querySelector("#number").value=selectedRow.children[3].textContent;
        document.querySelector("#date").value=selectedRow.children[4].textContent;
        document.querySelector("#model").value=selectedRow.children[5].textContent;

    }
    
});
document.getElementById('user-form').style.display='none';

document.getElementById('submit').onclick = function() {
    var valid = true;
    event.preventDefault;

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

    var numberInput = document.getElementById('number');
    var numberRegex = /^[0-9]{10}$/;
    if (numberInput.value.trim() === '' || !numberRegex.test(numberInput.value.trim())) {
        alert("Please enter a valid 10-digit telephone number.");
        valid = false;
        return false;
    }

    var dateInput = document.getElementById('date');
    var firstNameRegex = /^[A-Za-z]+$/;
    var numberRegex = /^[0-9]{10}$/;
    var validModels = ['Afternoon 15h-16h', 'Afternoon 14h-15h', 'Morning 9h-10h', 'Morning 11h-12h'];
    if (dateInput.value.trim() === '' || !firstNameRegex.test(dateInput.value.trim()) && !numberRegex.test(numberInput.value.trim()) ||  !validDate.includes(modelInput.value.trim())) {
        alert("Please enter a valid date.");
        valid=false;
        return false;
    }
    var modelInput = document.getElementById('model');
    var firstNameRegex = /^[A-Za-z]+$/;
    var validModels = ['VALOUR', 'DBS', 'VANTAGE', 'DBX707', 'DB12'];

    if (
        modelInput.value.trim() === '' ||
        !firstNameRegex.test(modelInput.value.trim()) ||
        !validModels.includes(modelInput.value.trim().toUpperCase())
    ) {
        alert("Please enter a valid model.");
        valid=false;
       return false;
    }
    
};


//  code to fetch historydata into database
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

