import mongoose from "mongoose";

const natureSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    typeRequest: {
      type: String,
      required: true,
    },
    commentsCitizen: {
      type: String,
      trim: true,
    },
    commentsEmployee: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model("Nature", natureSchema);
