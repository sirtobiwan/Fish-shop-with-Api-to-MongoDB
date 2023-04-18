import mongoose from 'mongoose';
import Review from "./review.js"
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  price: Number,
  currency: String,
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;