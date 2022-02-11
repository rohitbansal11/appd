import LegalLandmark from '../../models/LegalLandmark.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all legal landmarks
// @route       GET   /api/v1/bare-act-admin
// @access      Public
export const getLegalLandmarks = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single legal landmark
// @route       GET   /api/v1/bare-act-admin/:id
// @access      Public
export const getLegalLandmark = asyncHandler(async (req, res, next) => {
  const legalLandmark = await LegalLandmark.findById(req.params.id)
  if (!legalLandmark) {
    return next(new ErrorResponse(`Legal Landmark Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalLandmark,
  })
})

// @desc        Create legal landmark
// @route       POST   /api/v1/legal-landmark-admin/
// @access      Private/Admin
export const createLegalLandmark = asyncHandler(async (req, res, next) => {
  const { title, description, court, judge, date, image } = req.body

  const legalLandmark = await LegalLandmark.create({
    title,
    description,
    court,
    judge,
    date,
    image,
  })

  res.status(201).json({
    success: true,
    data: legalLandmark,
  })
})

// @desc        Update legal landmark
// @route       PUT   /api/v1/legal-landmark-admin/:id
// @access      Private/Admin
export const updateLegalLandmark = asyncHandler(async (req, res, next) => {
  const legalLandmark = await LegalLandmark.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  if (!legalLandmark) {
    return next(new ErrorResponse(`Legal Landmark Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalLandmark,
  })
})

// @desc        delete legal landmark
// @route       Delete   /api/v1/legal-landmark-admin/:id
// @access      Private/Admin
export const deleteLegalLandmark = asyncHandler(async (req, res, next) => {
  await LegalLandmark.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Legal Landmark Removed',
    data: {},
  })
})
