const testService = require("../services/testService");


/**
 * @name getTest
 * @method GET
 * @url /test
 * @description Test data 를 다불러옴
 */
exports.getTest = async (req, res, next) => {
    try {
        const test = await testService.getTestData();
        return res.send(test);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};

/**
 * @name postTest
 * @method POST
 * @url /test
 * @body { name: String, age: Number }
 * @description Test를 생성
 */
exports.postTest = async (req, res, next) => {
    try {
        const user = req.body;
        const test = await testService.createTestData(user);
        return res.send(test);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
};