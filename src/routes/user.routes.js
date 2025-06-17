import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/middleware.js"
const route = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxcounr: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser,
)

roter.route("/register").post(loginUser)

//secure routes
router.route("/logout").post(verifyJWT, logoutUser)

export default router