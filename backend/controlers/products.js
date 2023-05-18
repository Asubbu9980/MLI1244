const ProductModel = require("../models/products");
const _ = require("lodash");
const Joi = require('joi')
const cartModel = require("../models/cartitem");

const createproduct = function (req, res, next) {
  const product = new ProductModel(req.body);
  product.save(function (err, data) {
    if (err) {
      return res.status(422).send(err);
    }
    return res.send(data);
  });
};


const getproducts = function (req, res, next) {
  ProductModel.find({}, function (err, data) {
     res.send(data);
  });
};

const updateproduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  ProductModel.findByIdAndUpdate(id, body, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};
const deleteproduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  ProductModel.findByIdAndDelete(id, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};

const getproduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  ProductModel.findById(id, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};


const getCartItemsDetails =function (req, res, next) { 
  const productIds = req.body.productIds;
  const quert = {
    _id : {$in : productIds}
  }
  ProductModel.find(quert, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};


module.exports = {
  getproducts,
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
  getCartItemsDetails
};



