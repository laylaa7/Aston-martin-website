const TestDrive = require('../models/testDriveModel');

const savetestDrive = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            telephone,
            cityInput,
            carModel,
           

        } = req.body;

        // Create a new testDrive instance
        const newTestDrive = new TestDrive({ 
            firstname,
            lastname,
            email,
            telephone,
            cityInput,
            carModel,
           

        });


  // Save to database
  await newTestDrive.save();

  console.log('Test Drive saved:', newTestDrive); // Log the saved testDrive for debugging

  res.redirect('/');  // Redirect to home page after submitting
} catch (err) {
  console.error('Error saving testDrive:', err);
  res.status(500).json({ error: 'Failed to save testDrive', details: err.message });
}
};

module.exports = {
    savetestDrive
};