import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  text: String,
  rating: Number,
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;