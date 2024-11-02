const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
    courseCode: { type: String, required: true },
    day: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Timetable', timetableSchema);
