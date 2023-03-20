const { Test } = require("../models");
const CONSTANTS = require("../conf/constant.js");
const ERROR = require("../conf/error.js");

exports.getTestData = async () => {
    const test = await Test.find().sort({ _id: -1 });
    return test;
};

exports.createTestData = async (info) => {
    if (!info.name || !info.age) {
        throw new Error(ERROR.NO_ID_OR_AGE);
    };
    const test = new Test(info);
    await test.save();

    return test;
};

