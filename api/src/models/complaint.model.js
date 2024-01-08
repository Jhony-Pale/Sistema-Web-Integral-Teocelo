import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    folio:{
      type: String,
      required: true,
      unique: true
    },
    date: {
      type: Date,
      required: true,
    },
    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    lastnameP: {
      type: String,
      trim: true,
      required: true,
    },
    lastnameM: {
      type: String,
      trim: true,
      required: true,
    },
    phonenumber: {
      type: String,
      trim: true,
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
    versionKey: false
  }
);

export default mongoose.model("Complaint", complaintSchema);
