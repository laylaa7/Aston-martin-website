const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    carDescription: {
        type: String,
        required: true
    },
    topSpeed: {
        type: Number,
        required: true
    },
    zeroToHundredKmh: {
        type: Number,
        required: true
    },
    acceleration: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Car = mongoose.model('car', carSchema);

module.exports = Car;