import Syllabus from '../../models/Syllabus.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all syllabus
// @route       GET   /api/v1/syllabus-admin
// @access      Public
export const getSyllabuses = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single syllabus
// @route       GET   /api/v1/syllabus-admin/:id
// @access      Public
export const getSyllabus = asyncHandler(async (req, res, next) => {
  const syllabus = await Syllabus.findById(req.params.id)
  if (!syllabus) {
    return next(new ErrorResponse(`Syllabus Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: syllabus,
  })
})

// @desc        Create syllabus
// @route       POST   /api/v1/syllabus-admin/
// @access      Private/Admin
export const createSyllabus = asyncHandler(async (req, res, next) => {
  const { title, description, type, pdf } =
    req.body

  const syllabus = await Syllabus.create({
    title,
    description,
    type,
    pdf,
  })

  res.status(201).json({
    success: true,
    data: syllabus,
  })
})

// @desc        Update syllabus
// @route       PUT   /api/v1/syllabus/:id
// @access      Private/Admin
export const updateSyllabus = asyncHandler(async (req, res, next) => {
  const syllabus = await Syllabus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!syllabus) {
    return next(new ErrorResponse(`Syllabus Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: syllabus,
  })
})

// @desc        delete syllabus
// @route       Delete   /api/v1/syllabus-admin/:id
// @access      Private/Admin
export const deleteSyllabus = asyncHandler(async (req, res, next) => {
  await Syllabus.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Syllabus Removed',
    data: {},
  })
})
