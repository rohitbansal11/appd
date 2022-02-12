import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import StickyDocument from "../../models/StickyLandmark.js";
import LegalLandmark from "../../models/LegalLandmark.js";

// @desc        Get  StickyDocument Article
// @route       GET   /api/v1/sticky/:id
// @access      Public
export const getStickyDocument = asyncHandler(async (req, res, next) => {
  let userId = req.user.id;
  let document = await StickyDocument.findOne({ userId: userId });

  res.status(200).json({
    success: true,
    data: document || [],
  });
});

// @desc        Update StickyDocument Article
// @route       put   /api/v1/sticky/:id
// @access      Public
export const updateStickyDocument = asyncHandler(async (req, res, next) => {
  const document = await StickyDocument.findOne({ userId: req.user.id });

  if (document) {
    let newDocument = await StickyDocument.findByIdAndUpdate(document._id, {
      userId: req.user.id,
      documentId: req.params.documentId,
    });
    res.status(201).json({
      success: true,
      data: newDocument,
    });
  } else {
    let newDocument = await StickyDocument.create({
      userId: req.user.id,
      documentId: req.params.documentId,
    });
    res.status(201).json({
      success: true,
      data: newDocument,
    });
  }
});

// @desc        Delete StickyDocument
// @route       delete   /api/v1/document/:id
// @access      Public
export const deleteStickyDocument = asyncHandler(async (req, res) => {});
