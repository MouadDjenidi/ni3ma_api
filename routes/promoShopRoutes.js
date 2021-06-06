const express = require('express');
const promoShopCtl = require('../controllers/promoShopCtl')
const router = express.Router();

router.get('/allpromoshop/:id', promoShopCtl.promoShopByShopId);

module.exports = router