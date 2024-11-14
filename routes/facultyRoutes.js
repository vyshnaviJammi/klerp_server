const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/facultyController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.get('/', authenticateJWT, facultyController.getAllFaculty);
router.post('/', authenticateJWT, facultyController.createFaculty);

module.exports = router;
