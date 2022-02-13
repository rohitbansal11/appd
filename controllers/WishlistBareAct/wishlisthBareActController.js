import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'
import WishlistBareAct from '../../models/WishlistBareAct.js'
import BareAct from '../../models/BareAct.js'

// @desc        Get  Wishlist Bare Acts For Current User
// @route       GET   /api/v1/wishlist/bare-act/
// @access      Protect
export const getWishlistBareAct = asyncHandler(async (req, res, next) => {
  const wishlistedBareActs = await WishlistBareAct.find({ userId: req.user.id })
  res.status(200).json({
    success: true,
    data: wishlistedBareActs,
  })
})

// @desc        Add Bare Act To Wishlist
// @route       put   /api/v1/wishlist/bare-act/
// @access      Protect
export const addBareActToWishlist = asyncHandler(async (req, res, next) => {
  const bareAct = await BareAct.findById(req.params.bareActId)
  if (!bareAct) {
    // bare act not found
    return next(new ErrorResponse(`Bare Act Not Found`, 404))
  }

  const bareActInWishlist = await WishlistBareAct.findOne({
    bareActId: req.params.bareActId,
  })
  if (bareActInWishlist) {
    removeBareActFomWishlist(req, res, bareActInWishlist.id)
  } else {
    // add bare act to wishlist and also add the user id to bare act data
    const { category, section, chapter, title, description } = bareAct
    let wishlistBareActBody = {
      category,
      section,
      chapter,
      title,
      description,
      userId: req.user.id,
      bareActId: req.params.bareActId,
    }
    const wishlistBareAct = await WishlistBareAct.create(wishlistBareActBody)
    res.status(200).json({
      success: true,
      data: wishlistBareAct,
    })
  }
})

// @desc        Remove Bare Act From Wishlist

export const removeBareActFomWishlist = asyncHandler(async (req, res, id) => {
  await WishlistBareAct.findByIdAndRemove(id)
  res.status(200).json({
    success: true,
    error: 'Bare Act Removed',
  })
})
