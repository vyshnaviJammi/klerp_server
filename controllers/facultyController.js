const Faculty = require('../models/facultyModel');

exports.getAllFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find();
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFaculty = async (req, res) => {
    const { name, department, email } = req.body;

    const faculty = new Faculty({ name, department, email });

    try {
        const savedFaculty = await faculty.save();
        res.status(201).json(savedFaculty);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
