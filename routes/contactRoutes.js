import express from 'express';

import { 

    getContacts, 
    createContact, 
    getContactById, 
    updateContact, 
    deleteContact, 
    deleteAllContacts  

} from '../controllers/contactController.js';

const router = express.Router();

router.route('/')
    
    .get(getContacts)
    .post(createContact)
    .delete(deleteAllContacts);

router.route('/:id')

    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact)

export default router;  