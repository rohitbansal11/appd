import mongoose from 'mongoose'

const Schema = mongoose.Schema

const StickyDocument = new Schema({
  userId: {
    type: String,
    required: [true, 'Please add a ID'],
  },
  legalLandmarkId: {
    type: String,
    required: [true, 'Plese add legal landmark ID'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('sticky_landmark', StickyDocument)
