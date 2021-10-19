import Router from "express";
import UserController from '../controllers/user-controller.js'
const router = new Router();

router.get("/users",UserController.getAllUsers);
router.get("/user/:id",UserController.getUser);
router.post("/user",UserController.createUser);
router.put("/user",UserController.updateUser);
router.delete("/user/:id",UserController.deleteUser);

export default router;
