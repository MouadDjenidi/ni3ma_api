const express = require('express');
const geolocationCtl = require('../controllers/geolocationCtl')
const router = express.Router();

router.post('/allshopsaround', geolocationCtl.allShopsAround);

module.exports = router