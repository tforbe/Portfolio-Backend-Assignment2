import express from 'express';
import { requireAuth } from '../middleware/auth.js';

import { 

    getProjects, 
    createProject, 
    getProjectById, 
    updateProject, 
    deleteProject, 
    deleteAllProjects 
    
} from '../controllers/projectController.js';

const router = express.Router();

router.route('/')

    .get(getProjects)
    .post(requireAuth, createProject)
    .delete(requireAuth, deleteAllProjects);

router.route('/:id')

    .get(getProjectById)
    .put(requireAuth, updateProject)
    .delete(requireAuth, deleteProject);

export default router;
