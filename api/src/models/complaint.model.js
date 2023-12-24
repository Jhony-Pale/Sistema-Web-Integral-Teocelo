import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    colony: {
      type: String,
      required: true,
      trim: true,
    },
    pcode: {
      type: String,
      required: true,
      trim: true,
    },
    street: {
      type: String,
      trim: true,
      required: true,
    },
    outnumber: {
      type: String,
      required: true,
      trim: true,
    },
    innumber: {
      type: String,
      required: true,
      trim: true,
    },
    staffname: {
      type: String,
      required: true,
      trim: true,
    },
    staffcharge: {
      type: String,
      required: true,
      trim: true,
    },
    staffarea: {
      type: String,
      required: true,
      trim: true,
    },
    commentsCitizen: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Complaint", complaintSchema);
