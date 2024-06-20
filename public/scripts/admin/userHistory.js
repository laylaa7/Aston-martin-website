document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('user-form');
    const userList = document.getElementById('user-list');
    let selectedRow = null;

    function showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const main = document.querySelector('.main');
        container.insertBefore(div, main);
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    function clearFields() {
        document.querySelector('#firstName').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstName = document.querySelector('#firstName').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (firstName === '' || email === '' || password === '') {
            showAlert('Please fill in all fields', 'danger');
            return;
        }

        const data = { name: firstName, email, password };

        try {
            if (selectedRow === null) {
                const response = await fetch('/views/add-user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                showAlert(result.message, 'success');
            } else {
                const id = selectedRow.dataset.id;
                const response = await fetch(`/views/edit-user/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                const result = await response.json();
                showAlert(result.message, 'info');
                selectedRow = null;
            }
            clearFields();
            location.reload();
        } catch (error) {
            console.error('Error:', error);
            showAlert('Server error', 'danger');
        }
    });

    userList.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            selectedRow = e.target.closest('tr');
            document.querySelector('#firstName').value = selectedRow.children[0].textContent;
            document.querySelector('#email').value = selectedRow.children[1].textContent;
            document.querySelector('#password').value = selectedRow.children[2].textContent;
        }

        if (e.target.classList.contains('delete')) {
            const row = e.target.closest('tr');
            const id = row.dataset.id;

            try {
                const response = await fetch(`/views/delete-user/${id}`, {
                    method: 'DELETE'
                });

                if (!response.ok) {
                    throw new Error(`Server responded with ${response.status}`);
                }

                const result = await response.json();
                showAlert(result.message, 'danger');
                row.remove();
            } catch (error) {
                console.error('Error deleting user:', error);
                showAlert('Server error', 'danger');
            }
        }
    });

    document.getElementById('submit').onclick = function() {
        let valid = true;

        const firstNameInput = document.getElementById('firstName');
        const firstNameRegex = /^[A-Za-z]+$/;
        if (firstNameInput.value.trim() === '' || !firstNameRegex.test(firstNameInput.value.trim())) {
            alert("Please enter a valid first name.");
            valid = false;
        }

        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '' || !emailRegex.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        const passwordInput = document.getElementById('password');
        const passwordRegex = /^[A-Za-z0-9]{6,}$/; // Adjust regex for password validation as needed
        if (passwordInput.value.trim() === '' || !passwordRegex.test(passwordInput.value.trim())) {
            alert("Please enter a valid password.");
            valid = false;
        }

        return valid;
    };
});
