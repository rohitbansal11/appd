import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import MCQModal from "../../models/MCQModal.js";


// @desc        All MCQ
// @route       get   /api/v1/admin/mcq
// @access      Private/Admin
export const getAllMCQ = (req, res) => {
  res.status(200).json(res.advancedResults);
};

// @desc        Create MCQ
// @route       post   /api/v1/admin/mcq
// @access      Private/Admin
export const createMCQ = asyncHandler(async (req, res, next) => {
  const {
    type,
    name,
    title,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    rightAnswer,
  } = req.body;

  const mcqmodal = await MCQModal.create({
    name,
    type,
    title,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    rightAnswer,
  });

  res.status(201).json({
    success: true,
    data: mcqmodal,
  });
});


// @desc        Update MCQ
// @route       PUT   /api/v1/admin/mcq/:id
// @access      Private/Admin
export const updateMCQ = asyncHandler(async (req, res, next) => {
  const Mcq = await MCQModal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!Mcq) {
    return next(new ErrorResponse(`PYQ Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: Mcq,
  })
})


// @desc        Delete MCQ
// @route       Delete   /api/v1/admin/mcq/:id
// @access      Private/Admin
export const deleteMCQ = asyncHandler(async (req, res, next) => {
  await MCQModal.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'MCQ Removed',
    data: {},
  })
})







