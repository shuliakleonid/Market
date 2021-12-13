import Router from 'express';
// @ts-ignore
// eslint-disable-next-line import/extensions
import CartController  from '../controllers/cart-controller.ts';
// @ts-ignore
const router = new Router();

router.post('/order', CartController.createOrder);


export default router;
