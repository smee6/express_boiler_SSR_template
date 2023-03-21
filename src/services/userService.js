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
    const newUser = await User(info);
    await User.register(newUser, password);
    return newUser;
};

exports.login = async (req,res,next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.log(err);
            return res.status(500).send({ err: err.message });
        }
        if (!user) {
            return res.status(401).send({ err: info.message });
        }
        req.login(user, (err) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ err: err.message });
            }
            console.log(req.session.passport)
            return res.send({ user: user.id })
        });
    })(req, res, next);
};

exports.logOut = async (req, res) => {
    req.logout(() => {
        console.log(req.session.passport)
        return res.send({ msg: 'logout success' });
      });
    
}