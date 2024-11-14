const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.get('/', authenticateJWT, courseController.getAllCourses);

module.exports = router;
