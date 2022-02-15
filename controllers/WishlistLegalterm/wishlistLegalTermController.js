import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import WishlistLegalTerm from "../../models/WishlistLegalTerm.js";
import LegalTerm from "../../models/LegalTerm.js";

// @desc        Get  Wishlist Legal Term  For Current User
// @route       GET   /api/v1/wishlist/legal-term/
// @access      Protect 
export const getWishlistLegalterm = asyncHandler(async (req, res, next) => {
  const wishlistedLegalTermsValue = await WishlistLegalTerm.find({
    userId: req.user.id,
  });
  res.status(200).json({
    success: true,
    data: wishlistedLegalTermsValue,
  });
});

// @desc        Upate and add Legal Termt To Wishlist
// @route       put   /api/v1/wishlist/legal-term/
// @access      Protect
export const addLegalTermToWishlist = asyncHandler(async (req, res, next) => {
  const legalTerm = await LegalTerm.findById(req.params.legalTermId);
  if (!legalTerm) {
    // Legal Term not found
    return next(new ErrorResponse(`Legal Term Not Found`, 404));
  }

  const LegalTermInWishlist = await WishlistLegalTerm.findOne({
    legalTermId: req.params.legalTermId,
  });
  if (LegalTermInWishlist) {
    removeLegalTermFomWishlist(req, res, LegalTermInWishlist.id);
  } else {
    // add Leagal Term to wishlist and also add the user id to Leagal Term data
    const { category, title_hindi, description_hindi,   usage_hindi , title_english ,description_english ,usage_english ,author } = legalTerm;
    let WishlistLegaltermBody = {
      category,
      title_hindi,
      description_hindi,
      usage_hindi,
      title_english,
      description_english,
      usage_english,
      author,
      userId: req.user.id,
      legalTermId: req.params.legalTermId,
    };
    const WishlistLegaltermValues = await WishlistLegalTerm.create(
      WishlistLegaltermBody
    );
    res.status(200).json({
      success: true,
      data: WishlistLegaltermValues,
    });
  }
});

// @desc        Remove Legal Term From Wishlist

export const removeLegalTermFomWishlist = asyncHandler(async (req, res, id) => {
  await WishlistLegalTerm.findByIdAndRemove(id);
  res.status(200).json({
    success: true,
    error: "Leagal Term Removed From Wishlist",
  });
});
