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

router.route('/')

    .get(getUsers)
    .post(requireAuth, createUser)
    .delete(requireAuth, removeAllUsers);

router.route('/:id')

    .get(getUserById)
    .put(requireAuth, updateUser)
    .delete(requireAuth, deleteUser);

router.post('/signin', signin)
router.post('/signout', signout)
export default router;

