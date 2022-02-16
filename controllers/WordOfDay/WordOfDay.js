import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import WordOfDayModal from "../../models/WordOfDay.js";
import moment from "moment";
import DictionaryModal from "../../models/Dictionary.js";

// @desc        Get Word Of Day
// @route       GET   /api/v1/word-of-day
// @access      Public
export const getWordOfDay = asyncHandler(async (req, res) => {
  const word = await WordOfDayModal.find();
  if (word.length === 0) {
    const allWords = await DictionaryModal.find();
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    const wordOfTheDay = await WordOfDayModal.create({
      dictionary_id: randomWord._id,
    });
    res.status(200).json(wordOfTheDay);
  }

  const date = moment().format();
  const date1 = new Date(word[0].date).getDate(); // word created date ex: 16
  const date2 = new Date(date).getDate(); // current date ex: 16
  console.log(date1, date2);

  // check if word is still valid for the day
  if (Number(date1) === Number(date2)) {
    res.json(word);
  } else {
    // set a new word of the day
    setNewWord(req, res, word[0]._id);
  }
});

// set a new random word as word of the day
const setNewWord = asyncHandler(async (req, res, wordId) => {
  const allWords = await DictionaryModal.find();
  const randomWord = allWords[Math.floor(Math.random() * allWords.length)];

  const newWord = await WordOfDayModal.findByIdAndUpdate(wordId, {
    dictionary_id: randomWord._id,
  });
  res.status(201).json(newWord);
});
