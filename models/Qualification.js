import mongoose from "mongoose";

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

const Qualification = mongoose.model("Qualification", qualificationSchema);

export default Qualification;