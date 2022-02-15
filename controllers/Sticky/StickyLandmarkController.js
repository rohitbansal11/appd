import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'
import LegalLandmark from '../../models/LegalLandmark.js'
import StickyLandmark from '../../models/StickyLandmark.js'

// @desc        Get  StickyLandMark Article
// @route       GET   /api/v1/sticky/:id
// @access      Public
export const getStickyLandMark = asyncHandler(async (req, res, next) => {
  let userId = req.user.id
  let legalLandmark = await StickyLandmark.findOne({ userId: userId })
  if (!legalLandmark) {
    throw new ErrorResponse('User Does Not Have A Sticky Legal Terms')
  }
  let legalLandmarkData = await LegalLandmark.findById(
    legalLandmark.legalLandmarkId
  )
  console.log({ legalLandmark, ID: legalLandmark.legalLandmarkId })
  res.status(200).json({
    success: true,
    data: legalLandmarkData || [],
  })
})

// @desc        Update StickyLandMark Article
// @route       put   /api/v1/sticky/:id
// @access      Public
export const updateStickyLandMark = asyncHandler(async (req, res, next) => {
  const landMark = await StickyLandmark.findOne({ userId: req.user.id })

  if (landMark) {
    let newLandMark = await StickyLandmark.findByIdAndUpdate(landMark._id, {
      userId: req.user.id,
      legalLandmarkId: req.params.legalLandmarkId,
    })
    res.status(201).json({
      success: true,
      data: newLandMark,
    })
  } else {
    let newLandMark = await StickyLandmark.create({
      userId: req.user.id,
      legalLandmarkId: req.params.legalLandmarkId,
    })
    res.status(201).json({
      success: true,
      data: newLandMark,
    })
  }
})
