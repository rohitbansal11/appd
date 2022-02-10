import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BareAct = new Schema({
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

export default mongoose.model('BareAct', BareAct)
