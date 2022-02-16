import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WordOfDay = new Schema({
  dictionary_id: {
    type: String,
    required: [true, "Please add a english word"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("word_of_day", WordOfDay);
