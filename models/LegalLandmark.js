import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LegalLandmark = new Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  image: {
    type: String,
    required: [true, 'Please upload the image'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  court: {
    type: String,
    required: [true, 'Please add court name'],
  },
  judge: {
    type: String,
    required: [true, 'Please add article judge'],
  },
  date: {
    type: String,
    required: [true, 'Please add article date'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('legal_landmark', LegalLandmark)
