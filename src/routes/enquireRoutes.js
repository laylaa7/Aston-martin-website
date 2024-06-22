const express = require('express');
const router = express.Router();
const enquireController = require('../controllers/enquireController');

router.post('/reservation', enquireController.saveReservation)

module.exports = router;
