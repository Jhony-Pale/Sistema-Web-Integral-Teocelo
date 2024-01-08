import mongoose from "mongoose";

const waterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    street: {
      type: String,
      trim: true,
      required: true,
    },
    number: {
      type: String,
      required: true,
      trim: true,
    },
    colony: {
      type: String,
      required: true,
      trim: true,
    },
    town: {
      type: String,
      required: true,
      trim: true,
    },
    typeConection: {
      type: String
    },
    commentsCitizen: {
      type: String,
      trim: true,
    },
    commentsEmployee: {
      type: String,
      trim: true,
    },
    document: {
      type: String,
    },
    status: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Water", waterSchema);
