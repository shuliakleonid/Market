import Router from "express";
import AdminController from '../controllers/admin-controller.js'

const router = new Router();

router.post("/add", AdminController.createProduct);
router.get("/allProduct", AdminController.getAllProduct);
router.delete("/delete/:id", AdminController.deleteProduct);
router.put("/update", AdminController.updateProduct);

export default router;
