import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";


// @desc        All MCQ
// @route       get   /api/v1/mcq
// @access      Public
export const getAllMCQ = (req, res) => {
  res.status(200).json(res.advancedResults);
};