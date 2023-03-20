const { Router } = require("express");
const userRouter = Router();

const userController = require("../controllers/userController");

userRouter.get("/:id", userController.getUser);

userRouter.get("/", userController.getUsers);

userRouter.post("/", userController.postUser);



module.exports = { userRouter };


