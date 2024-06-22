const express = require('express');
const router = express.Router();
const testDriveController = require('../controllers/testDriveController');

router.post('/testdriveHistory', testDriveController.savetestDrive);  

module.exports = router;
