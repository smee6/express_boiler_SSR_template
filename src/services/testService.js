const { Test } = require("../models");
const CONSTANTS = require("../conf/constant.js");
const ERROR = require("../conf/error.js");

exports.getTestData = async () => {
    const test = await Test.find().sort({ _id: -1 });
    return test;
};

exports.createTestData = async (user) => {
    if (!user.name || !user.age) {
        return ERROR.NO_ID_OR_AGE;
    };
    const test = new Test(user);
    await test.save();

    return test;
};

