import Legalessay from '../../models/Legalessay.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all legalessay
// @route       GET   /api/v1/admin/legal-essay
// @access      Public
export const getLegalessaies = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single syllabus
// @route       GET   /api/v1/admin/legal-essay/:id
// @access      Public
export const getLegalessay = asyncHandler(async (req, res, next) => {
  const legalessay = await Legalessay.findById(req.params.id)
  if (!legalessay) {
    return next(new ErrorResponse(`Legalessay Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalessay,
  })
})

// @desc        Create legalessay
// @route       POST   /api/v1/admin/legal-essay/
// @access      Private/Admin
export const createLegalessay = asyncHandler(async (req, res, next) => {
  const { title, description, category } =
    req.body

  const legalessay = await Legalessay.create({
    title,
    description,
    category,
  })

  res.status(201).json({
    success: true,
    data: legalessay,
  })
})

// @desc        Update legalessay
// @route       PUT   /api/v1/admin/legal-essay/:id
// @access      Private/Admin
export const updateLegalessay = asyncHandler(async (req, res, next) => {
  const legalessay = await Legalessay.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!legalessay) {
    return next(new ErrorResponse(`Legalessay Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalessay,
  })
})

// @desc        delete Legalessay
// @route       Delete   /api/v1/admin/legal-essay/:id
// @access      Private/Admin
export const deleteLegalessay = asyncHandler(async (req, res, next) => {
  await Legalessay.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Legalessay Removed',
    data: {},
  })
})
