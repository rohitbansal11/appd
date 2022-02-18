import asyncHandler from 'express-async-handler'
import WordOfDayModal from '../../models/WordOfDay.js'

// @desc        Get Word Of Day
// @route       GET   /api/v1/word-of-day
// @access      Private
export const setNewWordOfDay = asyncHandler(async (req, res) => {
  const wordId = req.params.wordId
  // get current word of the day
  let wordOfDay = await WordOfDayModal.find()
  wordOfDay = wordOfDay[0]

  // // change the id if word of the day
  const newWord = await WordOfDayModal.findByIdAndUpdate(wordOfDay._id, {
    dictionary_id: wordId,
  })

  res.status(201).json(newWord)
})
