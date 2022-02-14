import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StikyLandMark = new Schema({
  userId: {
    type: String,
    required: [true, "Please add a ID"],
  },
  landMarkId: {
    type: String,
    required: [true, "Plese add document id"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("stikylandMark", StikyLandMark);
