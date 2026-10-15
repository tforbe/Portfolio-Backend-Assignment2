import mongoose from 'mongoose';

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

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;