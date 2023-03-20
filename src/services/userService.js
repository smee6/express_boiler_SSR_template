const { v4 } = require('uuid');
const { User } = require("../models");
const CONSTANTS = require("../conf/constant.js");
const ERROR = require("../conf/error.js");
const bcrypt = require("bcrypt");
const passport = require('passport');

exports.getUsers = async () => {
    //password 는 빼고 보내야 함
    const users = await User.find({}, { password: 0 });

    return users;
};

exports.createUser = async (info) => {
    const { id, email, password, name } = info;
    const user = await User.findOne({ where: { id } });
    if (user) {
        throw new Error(ERROR.USER_ALREADY_EXISTS);
    }
    const user_uuid = () => {
        const tokens = v4().split('-')
        return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
    }

    info.password = await bcrypt.hash(info.password, 10);
    info.uuid = user_uuid();
    const newUser = new User(info);
    await newUser.save();
    return newUser;
};

exports.login = async (info) => {

};