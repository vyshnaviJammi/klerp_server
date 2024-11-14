const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    instructor: { type: String, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
