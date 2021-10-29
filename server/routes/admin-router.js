import Router from "express";
import AdminController from '../controllers/admin-controller.js'

const router = new Router();

router.post("/add", AdminController.createProduct);


export default router;
