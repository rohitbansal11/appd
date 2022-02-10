import BareAct from '../../models/BareAct.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all bareActs
// @route       GET   /api/v1/bare-act-admin
// @access      Public
export const getBareActs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single bareAct
// @route       GET   /api/v1/bare-act-admin/:id
// @access      Public
export const getBareAct = asyncHandler(async (req, res, next) => {
  const bareAct = await BareAct.findById(req.params.id)
  if (!bareAct) {
    return next(new ErrorResponse(`BareAct Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: bareAct,
  })
})

// @desc        Create bareAct
// @route       POST   /api/v1/bare-act-admin/
// @access      Private/Admin
export const createBareAct = asyncHandler(async (req, res, next) => {
  const { title, description, category, chapter, section } = req.body

  const bareAct = await BareAct.create({
    title,
    description,
    category,
    chapter,
    section,
  })

  res.status(201).json({
    success: true,
    data: bareAct,
  })
})

// @desc        Update bareAct
// @route       PUT   /api/v1/bare-act/:id
// @access      Private/Admin
export const updateBareAct = asyncHandler(async (req, res, next) => {
  const bareAct = await BareAct.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!bareAct) {
    return next(new ErrorResponse(`BareAct Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: bareAct,
  })
})

// @desc        delete bareAct
// @route       Delete   /api/v1/bare-act-admin/:id
// @access      Private/Admin
export const deleteBareAct = asyncHandler(async (req, res, next) => {
  await BareAct.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'BareAct Removed',
    data: {},
  })
})
