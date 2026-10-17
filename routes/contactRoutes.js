import express from 'express';
import { requireAuth } from '../middleware/auth.js';

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
    .post(requireAuth, createContact)
    .delete(requireAuth, deleteAllContacts);

router.route('/:id')

    .get(getContactById)
    .put(requireAuth, updateContact)
    .delete(requireAuth, deleteContact)

export default router;  