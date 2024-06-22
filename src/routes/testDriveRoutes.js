const express = require('express');
const router = express.Router();
const testDriveController = require('../controllers/testDriveController');

router.post('/add-testdrive', testDriveController.addTestDrive);
router.put('/edit-testdrive/:id', testDriveController.editTestDrive);
router.delete('/delete-testdrive/:id', testDriveController.deleteTestDrive);
router.get('/get-testdrives', testDriveController.getTestDrives);

module.exports = router;
