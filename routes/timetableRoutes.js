const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/timetableController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.get('/', authenticateJWT, timetableController.getAllTimetables);
router.post('/', authenticateJWT, timetableController.createTimetable);

module.exports = router;
