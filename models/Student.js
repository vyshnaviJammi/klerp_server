const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    major: { type: String, required: true },
    year: { type: String, required: true },
    courses: [{ type: String }]
});

module.exports = mongoose.model('Student', studentSchema);
