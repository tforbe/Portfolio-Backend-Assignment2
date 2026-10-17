import mongoose from "mongoose";

// Defines the data and schema rules for qualifications
const qualificationSchema = new mongoose.Schema({

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

// Creates and exports the Qualification model
const Qualification = mongoose.model("Qualification", qualificationSchema);

export default Qualification;