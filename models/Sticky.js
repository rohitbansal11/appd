import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Sticky = new Schema({
  userId: {
    type: String,
    required: [true, 'Please add a ID'],
  },
  articleId: {
    type: String,
    required: [true, 'Plese add Article id'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('sticky_article', Sticky)
