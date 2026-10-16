import express from 'express';
import { 

    getQualifications, 
    createQualification, 
    getQualificationById, 
    updateQualification, 
    deleteQualification, 
    deleteAllQualifications 
    
} from '../controllers/qualificationController.js';

const router = express.Router();

router.route('/')

    .get(getQualifications)
    .post(createQualification)
    .delete(deleteAllQualifications);

router.route('/:id')

    .get(getQualificationById)
    .put(updateQualification)
    .delete(deleteQualification);

export default router;
