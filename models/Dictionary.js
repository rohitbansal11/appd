import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Dictionary = new Schema({
  word: {
    type: String,
    required: [true, "Please add a english word"],
  },

  meaning_eng: {
    type: String,
    required: [true, "Please add a emglish meaning"],
  },
  description_eng: {
    type: String,
    required: [true, "Please add a endlish description"],
  },
  defination_eng: {
    type: String,
    required: [true, "Please add a english defination"],
  },
  meaning_hin: {
    type: String,
    required: [true, "Please add a hindi meaning"],
  },
  description_hin: {
    type: String,
    required: [true, "Please add a hindi description"],
  },
  defination_hin: {
    type: String,
    required: [true, "Please add a hindi defination"],
  },
  usage_eng: {
    type: String,
    required: [true, "Please add a english usage"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("dictionary", Dictionary);
