import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StickyDocument = new Schema({
  userId: {
    type: String,
    required: [true, "Please add a ID"],
  },
  documentId: {
    type: String,
    required: [true, "Plese add document id"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("StickyDocument", StickyDocument);
