const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
 firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  }, 
   email: {
    type: String,
    required: true,
  },
   telephone: {
    type: String,
    required: true,
  },
  cityInput: {
    type: String,
    required: true
  },
  // carModel: {
  //   type: String,
  //   required: true,
  // },
  reservationtime: {
    type: String,
    required: true,
  },
  
 

},  {collection: 'reservations', timestamps: true });

const Reservations = mongoose.model('Reservation', reservationSchema);  
module.exports = Reservations;
