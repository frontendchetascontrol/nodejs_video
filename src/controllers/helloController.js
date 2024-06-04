const { getURL } = require("../services/aws");

const getHello = async (req, res) => {
    const url = await getURL();

    const hello =  {
        msg: 'hello',
        url
    };
    res.json(hello);
};

module.exports = {
    getHello,
};
