import Router from "express";
import CartController  from '../controllers/cart-controller.js';
const router = new Router();

router.post("/order", CartController.createOrder);


export default router;
