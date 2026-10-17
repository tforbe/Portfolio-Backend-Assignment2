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

// GET is public; POST and DELETE require valid token authentication
router.route('/')

    .get(getProjects)
    .post(requireAuth, createProject)
    .delete(requireAuth, deleteAllProjects);

// GET is public; PUT and DELETE require valid token authentication
router.route('/:id')

    .get(getProjectById)
    .put(requireAuth, updateProject)
    .delete(requireAuth, deleteProject);

export default router;
