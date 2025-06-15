import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const route = Router()

router.route("/register").post(registerUser)

export default router