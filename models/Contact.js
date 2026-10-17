import mongoose from 'mongoose';

// defines the data base structure 
const contactSchema = new mongoose.Schema({

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
        trim: true
    }
});

// compiles the schema 
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;