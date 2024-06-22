const Reservations = require('../models/reservationModel');

const addReservation = async (req, res) => {
    try {
        const reservation = new Reservations({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            telephone: req.body.telephone,
            cityInput: req.body.cityInput,
            reservationtime: req.body.reservationtime
        });
        await reservation.save();
        console.log("Reservation saved successfully");
        res.status(201).json({ message: 'Reservation saved successfully' });
    } catch (error) {
        console.error('Error saving reservation:', error);
        res.status(500).json({ error: 'Failed to save reservation', details: error.message });
    }
};

const editReservation = async (req, res) => {
    try {
        let reservation = await Reservations.findByIdAndUpdate(
            req.params.id,
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                telephone: req.body.telephone,
                cityInput: req.body.cityInput,
                reservationtime: req.body.reservationtime
            },
            { new: true, runValidators: true }
        );
        if (!reservation) {
            console.log("Reservation not found");
            return res.status(404).json({ error: 'Reservation not found' });
        }
        console.log(`Reservation with id ${req.params.id} was updated successfully`);
        res.status(200).json({ message: 'Reservation updated successfully', reservation });
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({ error: 'Failed to update reservation', details: error.message });
    }
};

const deleteReservation = async (req, res) => {
    try {
        const reservation = await Reservations.findByIdAndDelete(req.params.id);
        if (!reservation) {
            console.log("Reservation not found");
            return res.status(404).json({ error: 'Reservation not found' });
        }
        console.log(`Reservation with id ${req.params.id} was deleted successfully`);
        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ error: 'Failed to delete reservation', details: error.message });
    }
};

const getReservations = async (req, res) => {
    try {
        const reservations = await Reservations.find();
        res.status(200).json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ error: 'Failed to fetch reservations', details: error.message });
    }
};

module.exports = {
    addReservation,
    editReservation,
    deleteReservation,
    getReservations
};
