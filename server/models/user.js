const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    picture: String,
    role: {
      type: String,
      default: "shopper",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    //wishList: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
