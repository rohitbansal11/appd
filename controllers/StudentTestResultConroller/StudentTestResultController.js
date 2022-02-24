import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'
import StudentTestResult from '../../models/StudentTestResult.js'


// @desc        Create Student Test Result
// @route       POST   /api/v1/article/
// @access      User 
export const createStudentTestResult = asyncHandler(async (req, res, next) => {
    const {  total_question, total_mark, question_attempted, right_question, wronge_question } =
      req.body
  
    const studenttestresult = await StudentTestResult.create({
        student_id:req.user.id,
        total_question,
        total_mark,
        question_attempted,
        right_question,
        wronge_question,
        
    })
  
    res.status(201).json({
      success: true,
      data: studenttestresult,
    })
  })

// @desc        Get all Student Test Result
// @route       GET   /api/v1/article
// @access      Public
export const getStudentTestResult = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults)
  })