const userService = require('../services/userService');
const passport = require('passport');

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

exports.loginUser = async (req, res, next) => {
    try {
        await userService.login(req, res, next);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ err: error.message });
    }
}

exports.logoutUser = async (req, res) => {
    try {
        await userService.logOut(req, res);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ err: error.message });
    }
}