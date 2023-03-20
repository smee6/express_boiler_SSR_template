const userService = require('../services/userService');


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