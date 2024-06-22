const mongoose = require('mongoose');

const testDriveSchema = new mongoose.Schema({
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
   carModel: {
  type: String,
    required: true,
  },
  
  
 

},  {collection: 'testDrives', timestamps: true });

const TestDrive = mongoose.model('TestDrive', testDriveSchema);  
module.exports = TestDrive;
