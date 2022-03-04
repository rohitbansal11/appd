import crypto from 'crypto'
import mongoose from 'mongoose'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  image:{
    type: String,
    default: 'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png',
  },
  category: {
    type: String,
    enum: ['student', 'teacher','lawyer'],
    default: 'student',
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  phone:{
    type: String,
    default:''
  },
  role: {
    type: String,
    enum: ['user', 'publisher'],
    default: 'user',
  },
  verified: {
    type: Boolean,
    enum: [true, false],
    default: false,
  },
  

  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: [6, 'Password length must be more than 5 characters'],
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Encrypt password using bcrypt //
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Add a method to create token //
UserSchema.methods.getToken = async function () {
  return await jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, {
    expiresIn: `${process.env.JWT_EXPIRES}`,
  })
}

// match user entered password to hashed password in the database //
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

// generate and hash password token //
UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex')
  // hash token and set to resetPasswordToken field //
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  // set the expire
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000
  return resetToken
}

export default mongoose.model('User', UserSchema)
