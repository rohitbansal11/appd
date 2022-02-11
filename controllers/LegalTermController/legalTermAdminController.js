import LegalTerm from '../../models/LegalTerm.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all legal term
// @route       GET   /api/v1/legal-term-admin
// @access      Public
export const getLegalTerms = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single legal term
// @route       GET   /api/v1/LegalTerm-admin/:id
// @access      Public
export const getLegalTerm = asyncHandler(async (req, res, next) => {
  const legalTerm = await LegalTerm.findById(req.params.id)
  if (!legalTerm) {
    return next(new ErrorResponse(`LegalTerm Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalTerm,
  })
})

// @desc        Create legal term
// @route       POST   /api/v1/legal-term-admin/
// @access      Private/Admin
export const createLegalTerm = asyncHandler(async (req, res, next) => {
  const {
    title_hindi,
    description_hindi,
    usage_hindi,
    title_english,
    description_english,
    usage_english,
    author,
    date,
    time,
  } = req.body

  const legalTerm = await LegalTerm.create({
    title_hindi,
    description_hindi,
    usage_hindi,
    title_english,
    description_english,
    usage_english,
    author,
    date,
    time,
  })

  res.status(201).json({
    success: true,
    data: legalTerm,
  })
})

// @desc        Update legal term
// @route       PUT   /api/v1/LegalTerm/:id
// @access      Private/Admin
export const updateLegalTerm = asyncHandler(async (req, res, next) => {
  const legalTerm = await LegalTerm.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!legalTerm) {
    return next(new ErrorResponse(`Legal Term Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalTerm,
  })
})

// @desc        delete legal term
// @route       Delete   /api/v1/legal-term-admin/:id
// @access      Private/Admin
export const deleteLegalTerm = asyncHandler(async (req, res, next) => {
  await LegalTerm.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Legal Term Removed',
    data: {},
  })
})
