import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import MockTest from "../../models/MockTest.js";



// @desc        All PYQ
// @route       get   /api/v1/admin/mocktest
// @access      Private/Admin
export const getAllMockTest = (req, res) => {
  res.status(200).json(res.advancedResults);
};

// @desc        Create MockTest
// @route       post   /api/v1/admin/mocktest
// @access      Private/Admin
export const createMockTest = asyncHandler(async (req, res, next) => {
  const {
    category,
    subject,
    title,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    rightAnswer,
  } = req.body;

  const bareAct = await MockTest.create({
    subject,
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


// @desc        Update MockTest
// @route       PUT   /api/v1/admin/mocktest/:id
// @access      Private/Admin
export const updateMockTest = asyncHandler(async (req, res, next) => {
  const mocktest = await MockTest.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!mocktest) {
    return next(new ErrorResponse(`PYQ Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: mocktest,
  })
})


// @desc        Delete MockTest
// @route       Delete   /api/v1/admin/mocktest/:id
// @access      Private/Admin
export const deleteMockTest = asyncHandler(async (req, res, next) => {
  await MockTest.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Mock Test Removed',
    data: {},
  })
})