const userService = require('../services/userService');

const getAllUsers = (req, res) => {
    const users = userService.getUsers();
    res.json(users);
};

const createUser = (req, res) => {
    const user = req.body;
    userService.addUser(user);
    res.status(201).json(user);
};

module.exports = {
    getAllUsers,
    createUser,
};
