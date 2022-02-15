import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";



// @desc        All Mock Test
// @route       get   /api/v1/mocktest
// @access      Public
export const getAllMockTest = (req, res) => {
  res.status(200).json(res.advancedResults);
};