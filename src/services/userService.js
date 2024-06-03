let users = [];

const getUsers = () => {
    return users;
};

const addUser = (user) => {
    users.push(user);
};

module.exports = {
    getUsers,
    addUser,
};
