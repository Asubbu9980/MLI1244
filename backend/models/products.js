const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  image: String,
  description: String,
  price: Number,
  available_qty:Number,
  total_qty:Number
});
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
