const Reservation = require('../models/reservationModel');

const saveReservation = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            telephone,
            reservationtime,
            carmodel,
            cityInput
        } = req.body;

        // Create a new reservation instance
        const newReservation = new Reservation({ 
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Telephone: telephone,
            Reservation:reservationtime,
            CarModel: carmodel,
            city: cityInput
        });

        // Save to database
        await newReservation.save();

        res.status(201).json({ message: 'Reservation saved successfully' });
    } catch (err) {
        console.error('Error saving Reservation:', err);
        res.status(500).json({ error: 'Failed to save Reservation' });
    }
};

module.exports = {
    saveReservation
};