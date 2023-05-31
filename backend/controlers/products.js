const ProductModel = require("../models/products");
// const _ = require("lodash"); 
// const cartModel = require("../models/cartitem");



const createproduct = async function (req, res, next) {
  try {
    const product = new ProductModel(req.body);
    const data = await product.save();
    res.send(data);
  } catch (err) {
    res.status(422).send(err);
  }
};




const getproducts = async function (req, res, next) {
  try {
    const data = await ProductModel.find({});
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};



const updateproduct = async function (req, res, next) {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await ProductModel.findByIdAndUpdate(id, body);
    if (!data) {
      return res.status(404).send("Product not found");
    }
    return res.send(data);
  } catch (err) {
    return res.status(404).send(err);
  }
};



const deleteproduct = async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = await ProductModel.findByIdAndDelete(id);
    if (!data) {
      return res.status(404).send("Product not found");
    }
    return res.send(data);
  } catch (err) {
    return res.status(404).send(err);
  }
};





const getproduct = async function (req, res, next) {
  try {
    const id = req.params.id;
    const data = await ProductModel.findById(id);
    if (!data) {
      return res.status(404).send("Product not found");
    }
    return res.send(data);
  } catch (err) {
    return res.status(404).send(err);
  }
};




const getCartItemsDetails = async function (req, res, next) {
  try {
    const productIds = req.body.productIds; //["id1", "id2", "id3"] come from front end    arrays of ids:- productIds
    const query = {
      _id: { $in: productIds }, // $in compared to given id with stored id in db.   it accept arrays of values
    };
    const data = await ProductModel.find(query);
    return res.send(data);
  } catch (err) {
    return res.status(404).send(err);
  }
};


module.exports = {
  getproducts,
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
  getCartItemsDetails
};






// by call back function methods










// const createproduct = function (req, res, next) {
//   const product = new ProductModel(req.body);
//   product.save(function (err, data) {
//     if (err) {
//       return res.status(422).send(err);
//     }
//     return res.send(data);
//   });
// };


// const getproducts = function (req, res, next) {
//   ProductModel.find({}, function (err, data) {
//      res.send(data);
//   });
// };




// const updateproduct = function (req, res, next) {
//   const id = _.get(req, "params.id", null); //
//   const body = _.get(req, "body", {});
//   ProductModel.findByIdAndUpdate(id, body, function (err, data) {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     return res.send(data);
//   });
// };




// const deleteproduct = function (req, res, next) {
//   const id = _.get(req, "params.id", null);
//   ProductModel.findByIdAndDelete(id, function (err, data) {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     return res.send(data);
//   });
// };





// const getproduct = function (req, res, next) {
//   const id = _.get(req, "params.id", null);
//   ProductModel.findById(id, function (err, data) {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     return res.send(data);
//   });
// };




// const getCartItemsDetails =function (req, res, next) { 
//   const productIds = req.body.productIds;  //["id1", "id2", "id3"] come from front end    arrays of ids:- productIds
//   const query = {
//     _id : {$in : productIds}  // $in compared to given id with stored id in db.   it accept arrays of values
//   }
//   ProductModel.find(query, function (err, data) {
//     if (err) {
//       return res.status(404).send(err);
//     }
//     return res.send(data);
//   });
// };