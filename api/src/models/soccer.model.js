import mongoose from "mongoose";

const soccerSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: Number,
      required: true,
    },
    teamname: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    plays: {
      type: Number,
      required: true,
    },
    wins: {
      type: Number,
      required: true,
    },
    draws: {
      type: Number,
      required: true,
    },
    losses: {
      type: Number,
      required: true,
    },
    goalsfavor: {
      type: Number,
      required: true,
    },
    goalsagainst: {
      type: Number,
      required: true,
    },
    goaldifference: {
      type: Number,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Soccer", soccerSchema);
