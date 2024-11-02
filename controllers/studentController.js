const Student = require('../models/Student');
const jwt = require('jsonwebtoken');

const getCurrentUserId = (req) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) throw new Error('Unauthorized');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
};

const addStudent = async (req, res) => {
    const { name, email, major, year } = req.body;
    try {
        const student = new Student({ name, email, major, year });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addStudent, getStudents, getStudentById, updateStudent, deleteStudent };