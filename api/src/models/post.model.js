import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);
