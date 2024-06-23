/* const pathname = window.location.pathname;
  const car = pathname.split("/").pop();
function setCarModelName(car) {
    const carModelElement = document.getElementById('carModel');
    if (carModelElement) {
        carModelElement.textContent = car;
    }
}

setCarModelName(car); */
document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('reservation-form');
    const reservationList = document.getElementById('reservation-list');
    let selectedRow = null;

    function showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        container.insertBefore(div, container.firstChild);
        setTimeout(() => div.remove(), 3000);
    }

    async function getReservations() {
        try {
            const response = await fetch('/get-reservations');
            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }
            const data = await response.json();
            populateReservations(data);
        } catch (error) {
            console.error('Error fetching reservations:', error);
            showAlert('Failed to fetch reservations', 'danger');
        }
    }

    function populateReservations(reservations) {
        reservationList.innerHTML = '';
        reservations.forEach(reservation => {
            const row = document.createElement('tr');
            row.dataset.id = reservation._id;
            row.innerHTML = `
                <td>${reservation.firstname}</td>
                <td>${reservation.lastname}</td>
                <td>${reservation.email}</td>
                <td>${reservation.telephone}</td>
                <td>${reservation.cityInput}</td> 
     
                <td>${reservation.reservationtime}</td>
                <td>
                    <button class="btn btn-warning btn-sm edit-btn">Edit</button>
                    <button class="btn btn-danger btn-sm delete-btn">Delete</button>
                </td>
            `;
            reservationList.appendChild(row);
        });
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const newReservation = {
            firstname: document.getElementById('firstName').value,
            lastname: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            cityInput: document.getElementById('cityInput').value,
          /*   carModel: document.getElementById('carModel').value, */
            reservationtime:  document.getElementById('reservationtime').value
        };

        let url = ' /add-reservation';
        console.log(newReservation)
        let method = 'POST';
        if (selectedRow) {
            url = ` /edit-reservation/${selectedRow.dataset.id}`;
            method = 'PUT';
        }

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newReservation)
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            const data = await response.json();
            showAlert(data.message, 'success');
            form.reset();
            selectedRow = null;
            getReservations();
        } catch (error) {
            console.error('Error adding/editing reservation:', error);
            showAlert('Failed to save/update reservation', 'danger');
        }
    });

    reservationList.addEventListener('click', async function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const row = event.target.closest('tr');
            selectedRow = row;

            form.elements['firstName'].value = row.cells[0].textContent;
            form.elements['lastName'].value = row.cells[1].textContent;
            form.elements['email'].value = row.cells[2].textContent;
            form.elements['telephone'].value = row.cells[3].textContent;
            form.elements['cityInput'].value = row.cells[4].textContent;
          /*   form.elements['carModel'].value = row.cells[5].textContent; */
            form.elements['reservationtime'].value = row.cells[5].textContent;
        } else if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            const confirmation = confirm(`Are you sure you want to delete reservation for ${row.cells[0].textContent} ${row.cells[1].textContent}?`);
            if (confirmation) {
                try {
                    const response = await fetch(`/delete-reservation/${row.dataset.id}`, { method: 'DELETE' });
                    if (!response.ok) {
                        throw new Error(`Server responded with ${response.status}`);
                    }
                    const data = await response.json();
                    showAlert(data.message, 'success');
                    getReservations();
                } catch (error) {
                    console.error('Error deleting reservation:', error);
                    showAlert('Failed to delete reservation', 'danger');
                }
            }
        }
    });

    getReservations();
});
