import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
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

export default router