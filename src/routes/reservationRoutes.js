const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/add-reservation', reservationController.addReservation);
router.put('/edit-reservation/:id', reservationController.editReservation);
router.delete('/delete-reservation/:id', reservationController.deleteReservation);
router.get('/get-reservations', reservationController.getReservations);

module.exports = router;
