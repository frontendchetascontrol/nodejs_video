const express = require('express');

const router = express.Router();

router.get('/', { msg: 'hello '});

module.exports = router;
