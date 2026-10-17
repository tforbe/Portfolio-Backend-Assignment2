import Contact from '../models/Contact.js';

// Retrieves all contact documents from the database collection
export const getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }

    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Validates body data and creates a new contact document entry
export const createContact = async (req, res) => {

    try {

        const {firstname, lastname, email} = req.body;
        const newContact =await Contact.create({firstname, lastname, email});
        res.status(201).json(newContact);
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Fetches a single contact document matching the provided ID parameter
export const getContactById = async (req, res) => {

    try {

        const contact = await Contact.findById(req.params.id);

        if (!contact) {

            return res.status(404).json({ message: "Contact not Found"});
        }
        res.status(200).json(Contact);
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Finds a specific contact document by ID and updates its values
export const updateContact = async (req, res) => {

    try {

        const contact = await Contact.findByIdAndUpdate(
            req.params.id, req.body, 
            {new : true, runValidators: true });

        if (!updateContact) {

            return res.status(404).json({ message: "Contact not Found"});
        }
        res.status(200).json(updatedContact);
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Removes a single contact document matching the specified ID parameter
export const deleteContact = async (req, res) => {

    try {

        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {

            return res.status(404).json({ message: "Contact not Found"});
        }
        res.status(200).json({message: "Contact deleted"});
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

// Wipes out all existing documents from the contact collection entirely
export const deleteAllContacts = async (req, res) => {

    try {

        await Contact.deleteMany();
        res.status(200).json({ message: "all contacts deleted"});
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    } 
};