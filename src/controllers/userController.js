const userService = require('../services/userService');
const passport = require('passport');
const { User } = require("../models");


exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id);
        return res.send(user);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        return res.send(users);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
}

exports.postUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await userService.createUser(user);
        return res.send(newUser);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ err: err.message });
    }
}

exports.login = async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.status(401).send(info.message);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.status(200).json(user);
        });
    })(req, res, next);
}