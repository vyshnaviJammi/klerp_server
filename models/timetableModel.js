const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    day: { type: String, required: true },
    period1: { type: String, required: true },
    period2: { type: String, required: true },
    period3: { type: String, required: true },
    period4: { type: String, required: true }
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
