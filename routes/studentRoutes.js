const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.get('/', authenticateJWT, studentController.getAllStudents);
router.post('/', authenticateJWT, studentController.createStudent);

module.exports = router;
