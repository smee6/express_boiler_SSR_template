const { Router } = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");
const { isLoggedIn } = require("../middlewares/authUser");

userRouter.get("/:id", userController.getUser);

userRouter.get("/", userController.getUsers);

userRouter.post("/", userController.postUser);

userRouter.post("/login", userController.loginUser);

userRouter.post("/logout", isLoggedIn, userController.logoutUser);



module.exports = { userRouter };


