import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import PYQModal from "../../models/PYQModal.js";



// @desc        All PYQ
// @route       get   /api/v1/admin/pyq
// @access      Private/Admin
export const getAllPQY = (req, res) => {
  res.status(200).json(res.advancedResults);
};

// @desc        Create PYQ
// @route       post   /api/v1/admin/pyq
// @access      Private/Admin
export const createPYQ = asyncHandler(async (req, res, next) => {
  const {
    category,
    subject,
    type,
    title,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    rightAnswer,
  } = req.body;

  const bareAct = await PYQModal.create({
    subject,
    type,
    category,
    title,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    rightAnswer,
  });

  res.status(201).json({
    success: true,
    data: bareAct,
  });
});


// @desc        Update PYQ
// @route       PUT   /api/v1/admin/pyq/:id
// @access      Private/Admin
export const updatePYQ = asyncHandler(async (req, res, next) => {
  const Pyq = await PYQModal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!Pyq) {
    return next(new ErrorResponse(`PYQ Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: Pyq,
  })
})


// @desc        Delete PYQ
// @route       Delete   /api/v1/admin/pyq/:id
// @access      Private/Admin
export const deletePYQ = asyncHandler(async (req, res, next) => {
  await PYQModal.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'PYQ Removed',
    data: {},
  })
})