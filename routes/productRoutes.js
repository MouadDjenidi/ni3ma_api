const express = require('express');
const productCtl = require('../controllers/productCtl')
const router = express.Router();


router.get('/allproducts', productCtl.allProducts);
router.get('/product/:id', productCtl.productByID);
router.post('/addproduct',  productCtl.AddProduct);
router.delete('/deleteproduct/:id',  productCtl.DeleteProduct);

module.exports = router