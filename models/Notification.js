import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Notification = new Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  expiredate: {
    type: String,
    required: [true, 'Please add expire date'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('notification', Notification)
