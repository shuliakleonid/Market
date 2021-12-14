import Router from 'express';
// @ts-ignore
// eslint-disable-next-line import/extensions
import AdminController from '../controllers/product-controller.ts';

// @ts-ignore
const router = new Router();

router.post('/add', AdminController.createProduct);
router.get('/allProduct', AdminController.getAllProduct);
router.delete('/delete/:id', AdminController.deleteProduct);
router.put('/:id', AdminController.updateProduct);
router.get('/:id', AdminController.getProduct);

export default router;
