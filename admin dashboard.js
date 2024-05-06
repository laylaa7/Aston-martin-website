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
}

//Add Data
document.querySelector("#user-form").addEventListener("submit", (e)=>{
    e.preventDefault();

//Get form values
    const firstName= document.querySelector("#firstName").value;
    const lastName= document.querySelector("#lastName").value;
    const email= document.querySelector("#email").value;
    const number= document.querySelector("#number").value;

//validate
    if(firstName =="" || lastName=="" || email==""||number==""){
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
            selectedRow=null;
            showAlert("User Information Edited", "info");
        }
        clearfields();
    }
});
//edit data
document.querySelector("#user-list").addEventListener("click" ,(e)=>{
    target=e.target;
    if(e.target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#lastName").value=selectedRow.children[1].textContent;
        document.querySelector("#email").value=selectedRow.children[2].textContent;
        document.querySelector("#number").value=selectedRow.children[3].textContent;

    }
});
document.getElementById('submit').onclick = function() {
    var valid = true;

    var firstNameInput = document.getElementById('firstName');
    var firstNameRegex = /^[A-Za-z]+$/;
    if (firstNameInput.value.trim() === '' || !firstNameRegex.test(firstNameInput.value.trim())) {
        alert("Please enter a valid first name.");
        valid = false;
    }

    var lastNameInput = document.getElementById('lastName');
    var lastNameRegex = /^[A-Za-z]+$/; 
    if (lastNameInput.value.trim() === '' || !lastNameRegex.test(lastNameInput.value.trim())) {
        alert("Please enter a valid last name.");
        valid = false;
    }

    var emailInput = document.getElementById('email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    var numberInput = document.getElementById('number');
    var numberRegex = /^[0-9]{10}$/;
    if (numberInput.value.trim() === '' || !numberRegex.test(numberInput.value.trim())) {
        alert("Please enter a valid 10-digit telephone number.");
        valid = false;
    }
};