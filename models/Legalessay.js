import mongoose from 'mongoose'
const Schema = mongoose.Schema

const LegalEssay = new Schema({
  category: {
    type: String,
    enum: ['state', 'center'],
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('legalessaies', LegalEssay)
