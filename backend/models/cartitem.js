const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  prodcutTitle: String, 
  productId:String
});
const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
