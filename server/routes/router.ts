import Router from 'express';
// @ts-ignore
// eslint-disable-next-line import/extensions
import UserController from '../controllers/user-controller.ts';
import authMiddleware from '../middleware/authMiddleware';
// @ts-ignore
const router = new Router();

router.get('/users', UserController.getAllUsers);
router.get('/user/:id', UserController.getUser);
router.post('/user', authMiddleware, UserController.createUser);
router.put('/user', authMiddleware, UserController.updateUser);
router.delete('/user/:id', authMiddleware, UserController.deleteUser);

export default router;
