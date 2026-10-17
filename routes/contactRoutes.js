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

// GET is public; POST and DELETE require valid token authentication
router.route('/')
    
    .get(getContacts)
    .post(requireAuth, createContact)
    .delete(requireAuth, deleteAllContacts);

// GET is public; PUT and DELETE require valid token authentication
router.route('/:id')

    .get(getContactById)
    .put(requireAuth, updateContact)
    .delete(requireAuth, deleteContact)

export default router;  