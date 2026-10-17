import express from 'express';
import { requireAuth } from '../middleware/auth.js';

import { 

    getQualifications, 
    createQualification, 
    getQualificationById, 
    updateQualification, 
    deleteQualification, 
    deleteAllQualifications 
    
} from '../controllers/qualificationController.js';

const router = express.Router();

// GET is public; POST and DELETE require valid token authentication
router.route('/')

    .get(getQualifications)
    .post(requireAuth, createQualification)
    .delete(requireAuth, deleteAllQualifications);

// GET is public; PUT and DELETE require valid token authentication
    router.route('/:id')

    .get(getQualificationById)
    .put(requireAuth, updateQualification)
    .delete(requireAuth, deleteQualification);

export default router;
