import { Router } from 'express';

const router = Router();

import { createUser,getUsers,getUserById,deleteUser,updateUser,getUsersByProject,searchUserByLogin,getUserByName,newFollower,unFollow,updatePicture,getUserByLoginAndPassword,getSession,logout} from '../controllers/user.controller';

// /api/users/
router.post('/',createUser);
router.get('/', getUsers);
// /api/users/:userID
router.post('/id',getUserById);
router.post('/session',getSession);
router.post('/logout',logout);
router.post('/login',searchUserByLogin);
router.post('/search',getUserByLoginAndPassword);
router.post('/follow',newFollower);
router.post('/unfollow',unFollow);
router.post('/picture',updatePicture);
router.post('/name',getUserByName);

router.get('/projects/:projectId',getUsersByProject);
router.delete('/:id',deleteUser);
router.put('/:id',updateUser);

export default router
