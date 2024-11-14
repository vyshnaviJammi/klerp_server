const Timetable = require('../models/timetableModel');

exports.getAllTimetables = async (req, res) => {
    try {
        const timetables = await Timetable.find();
        res.json(timetables);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTimetable = async (req, res) => {
    const { day, period1, period2, period3, period4 } = req.body;

    const timetable = new Timetable({ day, period1, period2, period3, period4 });

    try {
        const savedTimetable = await timetable.save();
        res.status(201).json(savedTimetable);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
