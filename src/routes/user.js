import express from "express";
import { UserController } from "../controllers/user.controller.js";
import { userValidation } from "../validations/userValidation.js";

const userRouter = express.Router();



// only admin role can access
userRouter.patch('/:id' , userValidation.updateUserInfo ,UserController.updateUser)

export default userRouter