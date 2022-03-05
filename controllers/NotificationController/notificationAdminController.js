import Notification from '../../models/Notification.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all Notification
// @route       GET   /api/v1/admin/notification
// @access      Private/Admin
export const getNotifications = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single Notification
// @route       GET   /api/v1/admin/notification/:id
// @access      Private/Admin
export const getNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id)
  if (!notification) {
    return next(new ErrorResponse(`Notification Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: notification,
  })
})

// @desc        Create Notification
// @route       POST   /api/v1/admin/notification/
// @access      Private/Admin
export const createNotification = asyncHandler(async (req, res, next) => {
  const { title, description, expiredate} =
    req.body

  const notification = await Notification.create({
    title,
    description,
    expiredate
  })

  res.status(201).json({
    success: true,
    data: notification,
  })
})

// @desc        Update Notification
// @route       PUT   /api/v1/admin/notification/:id
// @access      Private/Admin
export const updateNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!notification) {
    return next(new ErrorResponse(`Notification Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: notification,
  })
})

// @desc        Delete Notification
// @route       Delete   /api/v1/admin/notification/:id
// @access      Private/Admin
export const deleteNotification = asyncHandler(async (req, res, next) => {
  await Notification.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Notification Removed',
    data: {},
  })
})
