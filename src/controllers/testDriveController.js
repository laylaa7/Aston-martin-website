// const Testdrive = require('../models/database');

// const saveTestDrive = async (req, res) => {
//     try {
//         const {
//             carModel,
//             cityInput,
//             time,
//             title,
//             firstName,
//             lastName,
//             telephone,
//             email,
//             contactMethod
//         } = req.body;

//         // Create a new Testdrive instance
//         const newTestdrive = new Testdrive({
//             CarModel: carModel,
//             City: cityInput,
//             time: time,
//             Personal: title,
//             FirstName: firstName,
//             LastName: lastName,
//             Telephone: telephone,
//             Email: email,
//             ContactMethod: contactMethod
//         });

//         // Save to database
//         await newTestdrive.save();

//         res.status(201).json({ message: 'Test Drive saved successfully' });
//     } catch (err) {
//         console.error('Error saving Test Drive:', err);
//         res.status(500).json({ error: 'Failed to save Test Drive' });
//     }
// };

// module.exports = {
//     saveTestDrive
// };