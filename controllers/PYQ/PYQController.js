import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import PYQModal from "../../models/PYQModal.js";


// @desc        All PYQ
// @route       get   /api/v1/pyq
// @access      Public
export const getAllPQY = (req, res) => {
  res.status(200).json(res.advancedResults);
};