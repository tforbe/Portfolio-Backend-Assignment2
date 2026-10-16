import express from 'express';

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
    .post(createProject)
    .delete(deleteAllProjects);

router.route('/:id')

    .get(getProjectById)
    .put(updateProject)
    .delete(deleteProject);

export default router;
