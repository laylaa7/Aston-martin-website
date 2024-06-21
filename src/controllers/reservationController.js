const Reservation = require('../models/reservationModel');

const saveReservation = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            telephone,
            cityInput,
            // carModel,
            reservationtime

        } = req.body;

        // Create a new reservation instance
        const newReservation = new Reservation({ 
            firstname,
            lastname,
            email,
            telephone,
            cityInput,
            // carModel,
            reservationtime

        });


  // Save to database
  await newReservation.save();

  console.log('Reservation saved:', newReservation); // Log the saved reservation for debugging

  res.redirect('/');  // Redirect to home page after submitting
} catch (err) {
  console.error('Error saving reservation:', err);
  res.status(500).json({ error: 'Failed to save reservation', details: err.message });
}
};

module.exports = {
   saveReservation
};