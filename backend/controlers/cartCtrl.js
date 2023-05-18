const cartModel = require("../models/cartitem");


const addItem = function (req, res, next) {

  cartModel.findOne({ productId: req.body.productId }).then(
    doc => {
      if (!doc) {
        const cart = new cartModel(req.body);
        cart.save(function (err, data) {
          if (err) {
            return res.status(422).send(err);
          }
          return res.send(data);
        });
      } else {
        return res.status(422).send("Item already exist in cart");
      }

    }, err => {
      return res.status(422).send(err);
    })

};


const getCartItems = function (req, res, next) {
  console.log(req.url)
  cartModel.find({}, function (err, data) {
    res.send(data);
  });
};


const deleteCartItem = function (req, res, next) {
  cartModel.findOneAndDelete({ productId: req.params.id }, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};
const getCount = function (req, res, next) {

  cartModel.find({}).count().then(
    doc => {
      return res.json(doc);
    }, err => {
      return res.status(404).send(err);
    }
  );
};



module.exports = {
  getCartItems,
  addItem,
  deleteCartItem,
  getCount
};
