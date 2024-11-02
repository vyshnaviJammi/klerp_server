const express = require('express');
const { addFaculty, getFacultyMembers, getFacultyById, updateFaculty, deleteFaculty } = require('../controllers/facultyController');

const router = express.Router();

router.post('/', addFaculty);
router.get('/', getFacultyMembers);
router.get('/:id', getFacultyById);
router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);

module.exports = router;
