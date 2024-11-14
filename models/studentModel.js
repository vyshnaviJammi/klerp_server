const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    course: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
