const express = require('express');
const { addTimetableEntry, getTimetableEntries, getTimetableEntryById, updateTimetableEntry, deleteTimetableEntry } = require('../controllers/timetableController');

const router = express.Router();

router.post('/', addTimetableEntry);
router.get('/', getTimetableEntries);
router.get('/:id', getTimetableEntryById);
router.put('/:id', updateTimetableEntry);
router.delete('/:id', deleteTimetableEntry);

module.exports = router;
