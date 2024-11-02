const Course = require('../models/Courses');

const addCourse = async (req, res) => {
    const { code, name, description } = req.body;
    try {
        const course = new Course({ code, name, description });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addCourse, getCourses, getCourseById, updateCourse, deleteCourse };