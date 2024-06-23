document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('testdrive-form');
    const testDriveList = document.getElementById('testDrive-list');
    let selectedRow = null;

    function showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        container.insertBefore(div, container.firstChild);
        setTimeout(() => div.remove(), 3000);
    }

    async function getTestDrives() {
        try {
            const response = await fetch('/get-testdrives');
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            const data = await response.json();
            populateTestDrives(data);
        } catch (error) {
            console.error('Error fetching test drives:', error);
            showAlert('Failed to fetch test drives', 'danger');
        }
    }

    function populateTestDrives(testDrives) {
        testDriveList.innerHTML = '';
        testDrives.forEach(testDrive => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${testDrive.firstname}</td>
                <td>${testDrive.lastname}</td>
                <td>${testDrive.email}</td>
                <td>${testDrive.telephone}</td>
                <td>${testDrive.cityInput}</td>
                <td>${testDrive.carModel}</td>
                <td>
                    <button class="btn btn-warning btn-sm edit">Edit</button>
                    <button class="btn btn-danger btn-sm delete">Delete</button>
                </td>
            `;
            row.dataset.id = testDrive._id;
            testDriveList.appendChild(row);
        });
    }

    async function addTestDrive(testDrive) {
        try {
            const response = await fetch('/add-testdrive', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testDrive)
            });
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            const data = await response.json();
            showAlert(data.message, 'success');
            getTestDrives();
        } catch (error) {
            console.error('Error adding test drive:', error);
            showAlert('Failed to add test drive', 'danger');
        }
    }

    async function editTestDrive(id, testDrive) {
        try {
            const response = await fetch(`/edit-testdrive/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testDrive)
            });
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            const data = await response.json();
            showAlert(data.message, 'success');
            getTestDrives();
        } catch (error) {
            console.error('Error editing test drive:', error);
            showAlert('Failed to edit test drive', 'danger');
        }
    }

    async function deleteTestDrive(id) {
        try {
            const response = await fetch(`/delete-testdrive/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            const data = await response.json();
            showAlert(data.message, 'success');
            getTestDrives();
        } catch (error) {
            console.error('Error deleting test drive:', error);
            showAlert('Failed to delete test drive', 'danger');
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            firstname: document.getElementById('firstName').value,
            lastname: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            cityInput: document.getElementById('cityInput').value,
            carModel: document.getElementById('carModel').value
        };

        if (selectedRow) {
            const id = selectedRow.dataset.id;
            editTestDrive(id, formData);
        } else {
            addTestDrive(formData);
        }

        form.reset();
        selectedRow = null;
    });

    testDriveList.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit')) {
            selectedRow = event.target.parentElement.parentElement;
            document.getElementById('firstName').value = selectedRow.children[0].textContent;
            document.getElementById('lastName').value = selectedRow.children[1].textContent;
            document.getElementById('email').value = selectedRow.children[2].textContent;
            document.getElementById('telephone').value = selectedRow.children[3].textContent;
            document.getElementById('cityInput').value = selectedRow.children[4].textContent;
            document.getElementById('carModel').value = selectedRow.children[5].textContent;
        } else if (event.target.classList.contains('delete')) {
            const id = event.target.parentElement.parentElement.dataset.id;
            deleteTestDrive(id);
        }
    });

    getTestDrives();
});
