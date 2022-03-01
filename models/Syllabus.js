import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Syllabus = new Schema({
  type: {
    type: String,
    enum: ['state', 'university'],
    default: 'state',
  },
  title: {
    type: String,
    required: [true, 'Please add the bare act title'],
  },
  description: {
    type: String,
    required: [true, 'Please add the description'],
  },
  pdf: {
    type: String,
    required: [true, 'Please add the description'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('syllabus', Syllabus)
