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
    type: Number,
    required: true,
  },
  reservationtime: {
    type: String,
    required: true,
  },
  carmodel: {
    type: String,
    required: true,
  },
  cityInput: {
    type: String,
    required: true
}
},  { timestamps: true });

const Reservations = mongoose.model('reservations', reservationSchema);  
module.exports = Reservations;
