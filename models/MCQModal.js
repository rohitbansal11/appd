import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MCQ = new Schema({
  type: {
    type: String,
    enum: ["practice", "actual test"],
    default: "practice",
  },
  subject_name: {
    type: String,
    required: [true, "Please upload the subject name"],
  },
  year:{
    type: String,
    required: [true, "Please upload the year"],
  },

  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  optionOne: {
    type: String,
    required: [true, "Please add a optionOne"],
  },
  optionTwo: {
    type: String,
    required: [true, "Please add a optionTwo"],
  },
  optionThree: {
    type: String,
    required: [true, "Please add a optionThree"],
  },
  optionFour: {
    type: String,
    required: [true, "Please add a optionFour"],
  },
  rightAnswer: {
    type: Number,
    enum: [1, 2, 3, 4],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("MCQ", MCQ);
