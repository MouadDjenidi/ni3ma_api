const express = require('express');
const userCtl = require('../controllers/userCtl')
const router = express.Router();

router.post('/createuser', userCtl.createuser);
router.get('/getuserbyuid/:uid', userCtl.getuserbyuid);
router.post('/test', userCtl.test);


//router.get('/verifyToken', userCtl.verifyToken);


module.exports = router