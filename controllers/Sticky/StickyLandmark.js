import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import StikyLandMark from "../../models/StickyLandmark.js";
import LegalLandmark from "../../models/LegalLandmark.js";

// @desc        Get  StikyLandMark Article
// @route       GET   /api/v1/sticky/landmark/
// @access      Public
export const getStikyLandMark = asyncHandler(async (req, res, next) => {
  let userId = req.user.id;
  let landMark = await StikyLandMark.findOne({ userId: userId });

  res.status(200).json({
    success: true,
    data: landMark || [],
  });
});

// @desc        Update StikyLandMark Article
// @route       put   /api/v1/sticky/landmark/:landMarkId
// @access      Public
export const updateStikyLandMark = asyncHandler(async (req, res, next) => {
  const landMark = await StikyLandMark.findOne({ userId: req.user.id });

  if (landMark) {
    let newlandMark = await StikyLandMark.findByIdAndUpdate(landMark._id, {
      userId: req.user.id,
      landMarkId: req.params.landMarkId,
    });
    res.status(201).json({
      success: true,
      data: newlandMark,
    });
  } else {
    let newlandMark = await StikyLandMark.create({
      userId: req.user.id,
      landMarkId: req.params.landMarkId,
    });
    res.status(201).json({
      success: true,
      data: newlandMark,
    });
  }
});


