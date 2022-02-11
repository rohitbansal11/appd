import LegalTerm from '../../models/LegalTerm.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all legal-term
// @route       GET   /api/v1/legal-term
// @access      Public
export const getLegalTerms = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single legal-term
// @route       GET   /api/v1/legal-term/:id
// @access      Public
export const getLegalTerm = asyncHandler(async (req, res, next) => {
  const legalTerm = await LegalTerm.findById(req.params.id)
  if (!legalTerm) {
    return next(new ErrorResponse(`Legal Term Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: legalTerm,
  })
})
