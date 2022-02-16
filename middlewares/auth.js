import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import ErrorResponse from '../utils/errorResponse.js'

export const protect = asyncHandler(async (req, res, next) => {
  // get token //
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // decode the token //
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const id = decoded.id
      const user = await User.findById(id).select('-password')
      req.user = user
      
      next()
    } catch (err) {
     
      res.status(401).json({
        sucess:false,
        massage:'Not Authorized, Token Failed'
      })
      throw new Error('Not Authorized, Token Failed')
    }
  }

  if (!token) {
    res.status(401).json({
      sucess:false,
      massage:'Not Authorized To Access This Route'
    })
    throw new Error('Not Authorized To Access This Route')
  }
})

// Grant access to specific roles //
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User Role ${req.user.role} Is Not Authorized To Access This Route`,
          403
        )
      )
    }
    next()
  }
}
