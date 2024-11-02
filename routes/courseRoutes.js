const express = require('express');
const { addCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

const router = express.Router();

router.post('/', addCourse);
router.get('/', getCourses);
router.get('/:id', getCourseById);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
