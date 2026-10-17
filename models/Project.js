import mongoose from 'mongoose';

// Defines the structure and validation requirements 
const projectSchema = new mongoose.Schema({

    title: {

        type: String,
        required: true
    },

    firstname: {

        type: String,
        Required: true
    },

    lastname: {

        type: String,
        Required: true
    },

    email: {

        type: String,
        Required: true,
    },

    completion: {

        type: Date,
        required: true
    },

    description: {

        type: String, 
        required: true
    }
}); 

// Creates and exports the Project model
const Project = mongoose.model('Project', projectSchema);

export default Project;