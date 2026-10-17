import express from 'express';
import { requireAuth } from '../middleware/auth.js';

import { 

    getUsers, 
    createUser, 
    removeAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser,
    signin,
    signout

} from '../controllers/userController.js';

const router = express.Router();


router.post('/signin', signin)
router.post('/signout', signout)

// POST is public; GET and DELETE require valid token authentication
router.route('/')

    .get(requireAuth, getUsers)
    .post(createUser)
    .delete(requireAuth, removeAllUsers);

// GET is public; PUT and DELETE require valid token authentication
router.route('/:id')

    .get(getUserById)
    .put(requireAuth, updateUser)
    .delete(requireAuth, deleteUser);

export default router;

