const express = require('express');
const IndexController = require('../controllers/index.');
const router = express.Router();


    router.get('/', IndexController.index );

    router.get('/products', IndexController.listOfProducts );

    router.post('/new-product', IndexController.newProduct);

module.exports = router;