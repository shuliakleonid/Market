import Router from "express";
import { check } from "express-validator";

const router = new Router();
import AuthController from "../controllers/auth-controller.js";

router.post(
  "/registration",
  [
    check("user_name", "User name cannot be empty").notEmpty(),
    check("password", "Password must be more than 3 symbols").isLength({
      min: 4,
      max: 15,
    }),
    check("email", "Please enter valid email").isEmail(),
  ],
  AuthController.registration
);
router.post(
  "/login",
  [
    check("password", "Password must be more than 3 symbols").isLength({
      min: 4,
      max: 15,
    }),
    check("email", "Please enter valid email").isEmail(),
  ],
  AuthController.login
);

export default router;
