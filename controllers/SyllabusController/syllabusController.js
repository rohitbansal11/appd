import Syllabus from '../../models/Syllabus.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all syllabus
// @route       GET   /api/v1/syllabus
// @access      Public
export const getSyllabuses = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single syllabus
// @route       GET   /api/v1/syllabus/:id
// @access      Public
export const getSyllabus = asyncHandler(async (req, res, next) => {
  const syllabus = await Syllabus.findById(req.params.id)
  if (!syllabus) {
    return next(new ErrorResponse(`syllabus Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: syllabus,
  })
})
