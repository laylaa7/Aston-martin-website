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
    document.querySelector("#CarName").value ="";
    document.querySelector("#CarType").value ="";
    document.querySelector("#TopSpeed").value ="";
}

//Add Data
document.querySelector("#user-form").addEventListener("submit", (e)=>{
    e.preventDefault();

//Get form values
    const firstName= document.querySelector("#firstName").value;
    const CarName= document.querySelector("#CarName").value;
    const CarType= document.querySelector("#CarType").value;
    const TopSpeed= document.querySelector("#TopSpeed").value;

//validate
    if(firstName =="" || CarName=="" || CarType==""||TopSpeed==""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow==null){
            const list=document.querySelector("#user-list");
            const row =document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${CarName}</td>
            <td>${CarType}</td>
            <td>${TopSpeed}</td>
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
            selectedRow.children[1].textContent= CarName;
            selectedRow.children[2].textContent= CarType;
            selectedRow.children[3].textContent= TopSpeed;
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
        document.querySelector("#CarName").value=selectedRow.children[1].textContent;
        document.querySelector("#CarType").value=selectedRow.children[2].textContent;
        document.querySelector("#TopSpeed").value=selectedRow.children[3].textContent;

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

    var CarNameInput = document.getElementById('CarName');
    var CarNameRegex = /^[A-Za-z]+$/; 
    if (CarNameInput.value.trim() === '' || !CarNameRegex.test(CarNameInput.value.trim())) {
        alert("Please enter a valid Car name.");
        valid = false;
    }

    var CarTypeInput = document.getElementById('email');
    var CarTypeRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (CarTypeInput.value.trim() === '' || !CarTypeRegex.test(CarTypeInput.value.trim())) {
        alert("Please enter a valid Car Type.");
        valid = false;
    }




    
    const TopSpeedInput = document.getElementById('TopSpeed');
        const topSpeed = parseInt(TopSpeedInput.value);
        if (topSpeed > '330') {
            alert("Please enter a top speed of no more than 3 digits.");
            valid = false;
        }
    

    
};