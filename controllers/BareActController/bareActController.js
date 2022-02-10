import asyncHandler from 'express-async-handler'

import BareAct from '../../models/BareAct.js'
import ErrorResponse from '../../utils/errorResponse.js'

// @desc        Get all bareAct
// @route       GET   /api/v1/bare-act
// @access      Public
export const getBareActs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Get single bareAct
// @route       GET   /api/v1/bare-act/:id
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
