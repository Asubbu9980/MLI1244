var express = require('express');
var router = express.Router();
var cartController = require("../controlers/cartCtrl");
/* GET users listing. */
router.get('/', cartController.getCartItems);
router.post('/', cartController.addItem);
router.delete('/:id', cartController.deleteCartItem);
router.get('/count', cartController.getCount);

module.exports = router;