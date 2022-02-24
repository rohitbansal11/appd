import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentTestResult = new Schema({
  student_id: {
    type: String,
    required: [true, "Please add a student Id"],
  },
  total_question: {
    type: String,
    required: [true, "Please add a total question"],
  },
  total_mark: {
    type: String,
    required: [true, "Please add a total marks"],
  },
  question_attempted: {
    type: String,
    required: [true, "Please add a question attempted"],
  },
  right_question: {
    type: String,
    required: [true, "Please add a right question"],
  },
  wronge_question: {
    type: String,
    required: [true, "Please add a wronge question"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("studenttestresult", StudentTestResult);
