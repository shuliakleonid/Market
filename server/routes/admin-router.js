import Router from "express";
import AdminController from '../controllers/product-controller.js'

const router = new Router();

router.post("/add", AdminController.createProduct);
router.get("/allProduct", AdminController.getAllProduct);
router.delete("/delete/:id", AdminController.deleteProduct);
router.put("/:id", AdminController.updateProduct);
router.get("/:id", AdminController.getProduct);

export default router;
