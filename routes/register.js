var express = require('express');
var router = express.Router();
var Reg = require('../modules/registerModule')

router.post('/logup', Reg.register);
router.post('/login', Reg.login);

module.exports = router;