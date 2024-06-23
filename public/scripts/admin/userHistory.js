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

    async function getUsers() {
        try {
            const response = await fetch('/views/get-users');
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            const data = await response.json();
            populateUsers(data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
            showAlert('Server error', 'danger');
        }
    } 

    function populateUsers(users) {
        userList.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.dataset.id = user._id;
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>
                    <button class="btn btn-warning btn-sm edit">Edit</button>
                    <button class="btn btn-danger btn-sm delete">Delete</button>
                </td>
            `;
            userList.appendChild(row);
        });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.querySelector('#firstName').value;
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        if (username === '' || email === '' || password === '') {
            showAlert('Please fill in all fields', 'danger');
            return;
        }

        const data = { username, email, password };

        try {
            let response;
            if (selectedRow === null) {
                response = await fetch('/views/add-user', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            } else {
                const id = selectedRow.dataset.id;
                response = await fetch(`/views/edit-user/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            }

            const result = await response.json();
            if (!response.ok) {
                showAlert(result.message, 'danger');
                throw new Error(result.message);
            }

            showAlert(result.message, 'success');
            clearFields();
            getUsers();
            selectedRow = null;
        } catch (error) {
            console.error('Error:', error);
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

                const result = await response.json();
                if (!response.ok) {
                    showAlert(result.message, 'danger');
                    throw new Error(result.message);
                }

                showAlert(result.message, 'success');
                row.remove();
            } catch (error) {
                console.error('Error deleting user:', error);
                showAlert('Server error', 'danger');
            }
        }
    });

     // Initial load of users
    getUsers(); 
});   