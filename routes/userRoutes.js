import express from 'express';

import { 

    getUsers, 
    createUser, 
    removeAllUsers, 
    getUserById, 
    updateUser, 
    deleteUser 

} from '../controllers/userController.js';

const router = express.Router();

router.route('/')

    .get(getUsers)
    .post(createUser)
    .delete(removeAllUsers);

router.route('/:id')

    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default router;
