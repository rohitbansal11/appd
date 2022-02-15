import mongoose from 'mongoose'

const Schema = mongoose.Schema

const WishlistLegalterm = new Schema({
  userId: {
    type: String,
    required: [true, 'Please add a ID'],
  },
  legalTermId: {
    type: String,
    required: [true, 'Plese add Legal Term  id'],
  },
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
  usage_english: {
    type: String,
    required: [true, 'Please add a english usage description'],
  },
  author: {
    type: String,
    required: [true, 'Please add author name'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('wishlist_legalterm', WishlistLegalterm)
