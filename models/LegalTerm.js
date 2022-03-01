import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LegalTerm = new Schema({
  category: {
    type: String,
    enum: ['terms', 'maxim'],
    default: 'terms',
  },
  title_hindi: {
    type: String,
    required: [true, 'Please add a hindi title'],
  },
  description_hindi: {
    type: String,
    required: [true, 'Please add a hindi description'],
  },
  defination_hin: {
    type: String,
    required: [true, 'Please add a hindi defination'],
  },
  usage_hindi: {
    type: String,
    required: [true, 'Please add a hindi usage description'],
  },
  title_english: {
    type: String,
    required: [true, 'Please add a english title'],
  },
  description_english: {
    type: String,
    required: [true, 'Please add a english description'],
  },
  defination_eng: {
    type: String,
    required: [true, 'Please add a hindi defination'],
  },
  usage_english: {
    type: String,
    required: [true, 'Please add a english usage description'],
  },
  author: {
    type: String,
    required: [true, 'Please add author name'],
  },
  date: {
    type: String,
    required: [true, 'Please add article date'],
  },
  time: {
    type: String,
    required: [true, 'Please add article time'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('legalterm', LegalTerm)
