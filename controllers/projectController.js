import Project from '../models/Project.js';

// Retrieves all project documents from the collection
export const getProjects = async (req, res) => {

    try {

        const projects = await Project.find();
        res.status(200).json(projects);
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Creates a new project document entry in the database
export const createProject = async (req, res) => {

    try {

        const { title, firstname, lastname, email, completion, description } = req.body;
        const newProject = await Project.create({ title, firstname, lastname, email, completion, description });
        res.status(201).json(newProject);
    } 
    
    catch (error) {

        res.status(400).json({ message: error.message });
    }
}; 

// Fetches a single project document matching the specified ID
export const getProjectById = async (req, res) => {

    try {

        const project = await Project.findById(req.params.id);

        if (!project) {

            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(project);
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Finds a specific project document by ID and updates its fields
export const updateProject = async (req, res) => {

    try {

        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id, req.body, { new: true, runValidators: true });

        if (!updatedProject) {

            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json(updatedProject);

    } 
    
    catch (error) {

        res.status(400).json({ message: error.message });
    }
};

// Removes a single project document matching the specified ID
export const deleteProject = async (req, res) => {

    try {

        const project = await Project.findByIdAndDelete(req.params.id);

        if (!project) {

            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ message: "Project deleted successfully" });
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Deletes every document inside the projects collection entirely
export const deleteAllProjects = async (req, res) => {

    try {

        await Project.deleteMany();
        res.status(200).json({ message: "All projects deleted successfully" });
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};
