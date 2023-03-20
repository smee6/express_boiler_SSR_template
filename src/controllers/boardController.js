const boardService = require("../services/boardService");


/**
 * @name getBoard
 * @description 게시판 정보를 가져온다.
 * @method GET
 * @url /board
 * @response { id: Number, title: String, content: String, createdAt: Date, updatedAt: Date }
 * @response 500 { err: String }
 * @response 404 { err: String }
 * @response 400 { err: String }
 * @response 200 { err: String }
 * */

exports.getBoard = async (req, res, next) => {
    try {
        const board = await boardService.getBoards();
        return res.send(board);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
}

/**
 * @name postBoard
 * @description 게시판 정보를 생성한다.
 * @method POST
 * @url /board
 * @body { title: String, content: String }
 * @response { id: Number, title: String, content: String, createdAt: Date, updatedAt: Date }
 * @response 500 { err: String }
 * @response 404 { err: String }
 * @response 400 { err: String }
 * @response 200 { err: String }
 * */

exports.postBoard = async (req, res, next) => {
    try {
        let board = req.body;
        //board의 number를 순서대로 넣어준다. 글 번호.
        board.number = await boardService.getBoards().then((res) => {
            return res.length + 1;
        });
        const newBoard = await boardService.createBoard(board);
        return res.send(newBoard);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
}

/**
 * @name getBoardId
 * @description 게시판 정보를 가져온다.
 * @method GET
 * @url /board/:id
 * @response { id: Number, title: String, content: String, createdAt: Date, updatedAt: Date , writer: test }
 * @response 500 { err: String }
 * @response 404 { err: String }
 * @response 400 { err: String }
 * @response 200 { err: String }
 * */

exports.getBoardId = async (req, res, next) => {
    try {
        const number = req.params.number;
        const board = await boardService.getBoard(number);
        return res.send(board);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
}




