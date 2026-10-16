import Contact from '../models/Contact.js';

export const getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }

    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

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

export const getContactById = async (req, res) => {

    try {

        const contact = await Contact.findById(req.params.id);

        if (!contact) {

            return res.status(404).json({ message: "Contact not Found"});
        }
        res.status(200).json(newContact);
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};

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

export const deleteAllContact = async (req, res) => {

    try {

        await Contact.deleteMany();
        res.status(200).json({ message: "all contacts deleted"});
    } 
    
    catch (error) {

        res.status(500).json({ message: error.message });
    }
};