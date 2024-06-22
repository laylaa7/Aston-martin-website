const Car = require('../models/carModel');

exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'car not found' });
        }
        res.json(car);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createCar = async (req, res) => {
    const { carName, carDescription, topSpeed, zeroToHundredKmh, acceleration } = req.body;

    const newCar = new Car({
        carName,
        carDescription,
        topSpeed,
        zeroToHundredKmh,
        acceleration
    });

    try {
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.editCar = async (req,res) => {
    
}