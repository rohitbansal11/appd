import mongoose from 'mongoose'

const Schema = mongoose.Schema

const NotificationCheck = new Schema({
  
  verifyDate: {
    type: String,
  },
})

export default mongoose.model('notificationcheck', NotificationCheck)
