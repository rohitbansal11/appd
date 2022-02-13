import mongoose from 'mongoose'

const Schema = mongoose.Schema

const WishlistBareAct = new Schema({
  userId: {
    type: String,
    required: [true, 'Please add a ID'],
  },
  bareActId: {
    type: String,
    required: [true, 'Plese add Bare Act id'],
  },
  category: {
    type: String,
    enum: ['state', 'center'],
    default: 'state',
  },
  chapter: {
    type: String,
    required: [true, 'Please add a chapter number'],
  },
  section: {
    type: String,
    requrired: [true, 'Please add a section number'],
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

export default mongoose.model('wishlist_bareact', WishlistBareAct)
