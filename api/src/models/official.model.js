import mongoose from "mongoose";

const officialSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    folio: {
      type: String,
      required: true,
      unique: true,
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
      required: true,
    },
    documentAccepted: {
      type: String,
      required: true,
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

export default mongoose.model("Official", officialSchema);
