import { Router } from "express";
import * as controller from "../controllers/authController.js";
const router = Router();

// Register User
router.route("/register").post(controller.register);
// Send Email
router.route("/register-mail").post(controller.registerMail);

// Authenticate User
router.route("/authenticate").post(controller.authenticate);

// Login User
router.route("/login").post(controller.login);

// User Info
router.route("/user/:username").get(controller.userInfo);

// Generate OTP
router.route("/generate-otp").get(controller.generateOtp);

// Verify OTP
router.route("verify-otp").get(controller.verifyOtp);

// Reset all variables
router.route("/reset-session").get(controller.resetSession);
export default router;
