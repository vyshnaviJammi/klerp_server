const Faculty = require('../models/Faculty');

const addFaculty = async (req, res) => {
    const { name, department, email } = req.body;
    try {
        const faculty = new Faculty({ name, department, email });
        await faculty.save();
        res.status(201).json(faculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFacultyMembers = async (req, res) => {
    try {
        const facultyMembers = await Faculty.find();
        res.status(200).json(facultyMembers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFacultyById = async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        res.status(200).json(faculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteFaculty = async (req, res) => {
    try {
        await Faculty.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Faculty deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addFaculty, getFacultyMembers, getFacultyById, updateFaculty, deleteFaculty };