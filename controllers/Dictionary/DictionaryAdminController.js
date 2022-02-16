import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'
import DictionaryModal from '../../models/Dictionary.js'

// @desc        Get all dectionary
// @route       GET   /api/v1/admin/dictionary
// @access      Public
export const getDictionary = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
})

// @desc        Create Dictionary
// @route       POST   /api/v1/admin/dictionary
// @access      Private/Admin
export const createDictionary = asyncHandler(async (req, res, next) => {
  const {
    word,
    description_eng,
    meaning_eng,
    defination_eng,
    meaning_hin,
    description_hin,
    defination_hin,
    usage_eng,
  } = req.body

  const legalTerm = await DictionaryModal.create({
    word,
    description_eng,
    meaning_eng,
    defination_eng,
    meaning_hin,
    description_hin,
    defination_hin,
    usage_eng,
   
  })

  res.status(201).json({
    success: true,
    data: legalTerm,
  })
})

// @desc        Update Dictionary
// @route       PUT   /api/v1/admin/dictionary/:id
// @access      Private/Admin
export const updateDictionary = asyncHandler(async (req, res, next) => {
  const dictionary = await DictionaryModal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  if (!dictionary) {
    return next(new ErrorResponse(`Dictionary  Not Found`, 404))
  }
  res.status(200).json({
    success: true,
    data: dictionary,
  })
})

// @desc        delete Dictionary
// @route       Delete   /api/v1/admin/dictionary/:id
// @access      Private/Admin
export const deleteDictionary = asyncHandler(async (req, res, next) => {
  await DictionaryModal.findByIdAndRemove(req.params.id)
  res.status(200).json({
    success: true,
    msg: 'Dictionary Removed',
    data: {},
  })
})
