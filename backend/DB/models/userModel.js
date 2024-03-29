import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      enum: [0, 1],
      default: 0,
    },
    isconfrimed: {
      type: Boolean,
      default: false,
    },
    forgetCode: {
      type: String,
    },
    activationCode: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
