import Router from 'express';
import { check } from 'express-validator';

// @ts-ignore
// eslint-disable-next-line import/extensions
import AuthController from '../controllers/auth-controller.ts';
// @ts-ignore
const router = new Router();

router.post(
  '/registration',
  [
    check('password', 'Password must be more than 3 symbols').isLength({
      min: 4,
      max: 15,
    }),
    check('email', 'Please enter valid email').isEmail(),
  ],
  AuthController.registration,
);
router.post(
  '/login',
  [
    check('password', 'Password must be more than 3 symbols').isLength({
      min: 4,
      max: 15,
    }),
    check('email', 'Please enter valid email').isEmail(),
  ],
  AuthController.login,
);

export default router;
