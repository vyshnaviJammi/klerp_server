const Timetable = require('../models/Timetable');

const addTimetableEntry = async (req, res) => {
    const { courseCode, day, time, location } = req.body;
    try {
        const timetableEntry = new Timetable({ courseCode, day, time, location });
        await timetableEntry.save();
        res.status(201).json(timetableEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTimetableEntries = async (req, res) => {
    try {
        const timetableEntries = await Timetable.find();
        res.status(200).json(timetableEntries);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getTimetableEntryById = async (req, res) => {
    try {
        const timetableEntry = await Timetable.findById(req.params.id);
        res.status(200).json(timetableEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTimetableEntry = async (req, res) => {
    try {
        const timetableEntry = await Timetable.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(timetableEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTimetableEntry = async (req, res) => {
    try {
        await Timetable.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Timetable entry deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addTimetableEntry, getTimetableEntries, getTimetableEntryById, updateTimetableEntry, deleteTimetableEntry };