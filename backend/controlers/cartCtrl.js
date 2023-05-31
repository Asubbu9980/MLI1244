const cartModel = require("../models/cartitem");

const addItem = async function (req, res, next) {
  try {
    const doc = await cartModel.findOne({ productId: req.body.productId });
    if (!doc) {
      const cart = new cartModel(req.body);
      const data = await cart.save();
      res.send(data);
    } else {
      res.status(422).send("Item already exists in cart");
    }
  } catch (err) {
    res.status(422).send(err);
  }
};

const getCartItems = async function (req, res, next) {
  try {
    const data = await cartModel.find({});
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteCartItem = async function (req, res, next) {
  try {
    const data = await cartModel.findOneAndDelete({ productId: req.params.id });
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
};

const getCount = async function (req, res, next) {
  try {
    const doc = await cartModel.find({}).count();
    res.json(doc);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  getCartItems,
  addItem,
  deleteCartItem,
  getCount
};





















// const cartModel = require("../models/cartitem");


// const addItem = function (req, res, next) {

//   cartModel.findOne({ productId: req.body.productId }).then(    // checking whether product id is matched or not
//     doc => {                                                    // responce data... and it is a parameter
//       if (!doc) {
//         const cart = new cartModel(req.body);
//         cart.save(function (err, data) {
//           if (err) {
//             return res.status(422).send(err);
//           }
//           return res.send(data);
//         });
//       } else {
//         return res.status(422).send("Item already exist in cart");
//       }

//     }, err => {
//       return res.status(422).send(err);
//     })

// };


// const getCartItems = function (req, res, next) {
//   console.log(req.url)
//   cartModel.find({}, function (err, data) {
//     res.send(data);
//   });
// };


// const deleteCartItem = function (req, res, next) {
//   cartModel.findOneAndDelete({ productId: req.params.id }, function (err, data) {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     return res.send(data);
//   });
// };
// const getCount = function (req, res, next) {

//   cartModel.find({}).count().then(
//     doc => {
//       return res.json(doc);
//     }, err => {
//       return res.status(404).send(err);
//     }
//   );
// };



// module.exports = {
//   getCartItems,
//   addItem,
//   deleteCartItem,
//   getCount
// };



