const { Router } = require("express");
const boardRouter = Router();
const boardController = require("../controllers/boardController");

boardRouter.get("/", boardController.getBoard);
boardRouter.get("/:number", boardController.getBoardId);
boardRouter.post("/", boardController.postBoard);


module.exports = { boardRouter };


