import Router from "express";
import UserController from '../controllers/user-controller.js'
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();

router.get("/users",UserController.getAllUsers);
router.get("/user/:id",authMiddleware,UserController.getUser);
router.post("/user",authMiddleware,UserController.createUser);
router.put("/user",authMiddleware,UserController.updateUser);
router.delete("/user/:id",authMiddleware,UserController.deleteUser);

export default router;
