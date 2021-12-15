import express from "express";

import UserController from "../controllers/userControllers";
import Validator from "../middlewares/validator";
import Datachecker from "../middlewares/datachecker";

const userRouter =express.Router();

userRouter.post("/register", Validator.newAccountRules(),
 Validator.validateInput,
 Datachecker.isEmailExist,

UserController.createUser)
userRouter.post("/login", UserController.userLogin)
userRouter.get("/all", UserController.getAllUsers)
userRouter.get("/:id", UserController.getOneUser)
userRouter.delete("/:id", UserController.deletOneUser)


export default userRouter;