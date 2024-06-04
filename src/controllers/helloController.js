
const getHello = (req, res) => {
    const hello =  {
        msg: 'hello'
    };
    res.json(hello);
};

module.exports = {
    getHello,
};
