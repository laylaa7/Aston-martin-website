const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/cars/:id', carController.getCarById);

router.get('/cars', carController.getAllCars);

router.post('/create/cars', carController.createCar);

router.post('/edit/cars/:id', carController.editCar)

module.exports = router;