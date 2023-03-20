const { Board } = require("../models");
const CONSTANTS = require("../conf/constant.js");
const ERROR = require("../conf/error.js");

exports.createBoard = async (target) => {
    if (!target.title || !target.content) {
        return ERROR.NO_TITLE_OR_CONTENT;
    };
    const board = new Board(target);
    await board.save();

    return board;
}

exports.getBoards = async () => {
    const board = await Board.find().sort({ _id: -1 });
    return board;
}

exports.getBoard = async (number) => {
    const board = await Board.findOne({ number: number });
    return board;
}
