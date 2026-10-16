import Qualification from '../models/Qualification.js';

export const getQualifications = async (req, res) => {

    try {

        const qualifications = await Qualification.find();
        res.status(200).json(qualifications);
    } 
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

export const createQualification = async (req, res) => {

    try {

        const { title, firstname, lastname, email, completion, description } = req.body;
        const newQualification = await Qualification.create({ title, firstname, lastname, email, completion, description });
        res.status(201).json(newQualification);
    } 
    catch (error) {

        res.status(400).json({ message: error.message });
    }
};

export const getQualificationById = async (req, res) => {

    try {

        const qualification = await Qualification.findById(req.params.id);

        if (!qualification) {

            return res.status(404).json({ message: "Qualification not found" });
        }

        res.status(200).json(qualification);
    } 
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

export const updateQualification = async (req, res) => {

    try {

        const updatedQualification = await Qualification.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true });
        
        if (!updatedQualification) {
    
            return res.status(404).json({ message: "Qualification not found" });
        }
    
        res.status(200).json(updatedQualification);
    } 
    catch (error) {
    
        res.status(400).json({ message: error.message });
    }
};

export const deleteQualification = async (req, res) => {
    
    try {
    
        const qualification = await Qualification.findByIdAndDelete(req.params.id);
    
        if (!qualification) {
    
            return res.status(404).json({ message: "Qualification not found" });
        }
    
        res.status(200).json({ message: "Qualification deleted successfully" });
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};

export const deleteAllQualifications = async (req, res) => {
    
    try {
    
        await Qualification.deleteMany();
        res.status(200).json({ message: "All qualifications deleted successfully" });
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};
