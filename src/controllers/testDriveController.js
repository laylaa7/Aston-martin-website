const TestDrive = require('../models/testDriveModel');

const addTestDrive = async (req, res) => {
    try {
        const testDrive = new TestDrive({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            telephone: req.body.telephone,
            cityInput: req.body.cityInput,
            carModel: req.body.carModel
        });
        await testDrive.save();
        console.log("Test drive saved successfully");
        res.status(201).json({ message: 'Test drive saved successfully' });
    } catch (error) {
        console.error('Error saving test drive:', error);
        res.status(500).json({ error: 'Failed to save test drive', details: error.message });
    }
};

const editTestDrive = async (req, res) => {
    try {
        let testDrive = await TestDrive.findByIdAndUpdate(
            req.params.id,
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                telephone: req.body.telephone,
                cityInput: req.body.cityInput,
                carModel: req.body.carModel
            },
            { new: true, runValidators: true }
        );
        if (!testDrive) {
            console.log("Test drive not found");
            return res.status(404).json({ error: 'Test drive not found' });
        }
        console.log(`Test drive with id ${req.params.id} was updated successfully`);
        res.status(200).json({ message: 'Test drive updated successfully', testDrive });
    } catch (error) {
        console.error('Error updating test drive:', error);
        res.status(500).json({ error: 'Failed to update test drive', details: error.message });
    }
};

const deleteTestDrive = async (req, res) => {
    try {
        const testDrive = await TestDrive.findByIdAndDelete(req.params.id);
        if (!testDrive) {
            console.log("Test drive not found");
            return res.status(404).json({ error: 'Test drive not found' });
        }
        console.log(`Test drive with id ${req.params.id} was deleted successfully`);
        res.status(200).json({ message: 'Test drive deleted successfully' });
    } catch (error) {
        console.error('Error deleting test drive:', error);
        res.status(500).json({ error: 'Failed to delete test drive', details: error.message });
    }
};

const getTestDrives = async (req, res) => {
    try {
        const testDrives = await TestDrive.find();
        res.status(200).json(testDrives);
    } catch (error) {
        console.error('Error fetching test drives:', error);
        res.status(500).json({ error: 'Failed to fetch test drives', details: error.message });
    }
};

module.exports = {
    addTestDrive,
    editTestDrive,
    deleteTestDrive,
    getTestDrives
};
