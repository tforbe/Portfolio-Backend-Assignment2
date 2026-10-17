import Qualification from '../models/Qualification.js';

// Retrieves all qualification records from the database collection
export const getQualifications = async (req, res) => {

    try {

        const qualifications = await Qualification.find();
        res.status(200).json(qualifications);
    } 
    catch (error) {

        res.status(500).json({ message: error.message });
    }
}; 

// Validates body details and creates a new qualification record entry
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

// Fetches a single qualification record matching the provided ID parameter
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

// Finds a specific qualification document by ID and updates its fields
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

// Removes a single qualification record matching the specified ID parameter
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

// Wipes out every document from the qualifications collection entirely
export const deleteAllQualifications = async (req, res) => {
    
    try {
    
        await Qualification.deleteMany();
        res.status(200).json({ message: "All qualifications deleted successfully" });
    } 
    catch (error) {
    
        res.status(500).json({ message: error.message });
    }
};
