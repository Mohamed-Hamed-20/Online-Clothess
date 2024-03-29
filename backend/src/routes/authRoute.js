import express from "express";
import * as uc from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { valid } from "../middlewares/validation.js";
import * as schema from "../validation/Auth.valid.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", valid(schema.register), uc.registerController);

//LOGIN || POST
router.post("/login", valid(schema.login), uc.loginController);

//Forgot Password || POST
router.post("/forgot-password", uc.forgotPasswordController);

router.get("/confirmEmail/:activationCode", valid(schema), uc.confirmEmail);
//test routes
router.get("/test", requireSignIn, isAdmin, uc.testController);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, uc.updateProfileController);

//orders
router.get("/orders", requireSignIn, uc.getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, uc.getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  uc.orderStatusController
);

export default router;
