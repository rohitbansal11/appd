import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Syllabus = new Schema({
  state: {
    type: String,
    required: [true, 'Please add the state'],
    default: '',
  },
  title: {
    type: String,
    required: [true, 'Please add the syllabus title'],
  },
  description: {
    type: String,
    required: [true, 'Please add the description'],
  },
  pdf: {
    type: String,
    required: [true, 'Please add the pdf'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('syllabus', Syllabus)
