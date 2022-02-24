import StudentTestResult from "../../models/StudentTestResult.js";
import {
    getStudentTestResult,
    createStudentTestResult

} from '../../controllers/StudentTestResultConroller/StudentTestResultController.js'
import express from "express";
const router = express.Router();
import { protect } from "../../middlewares/auth.js";
import advancedResults from "../../middlewares/advancedResults.js";

router.use(protect);

router.route("/").get(advancedResults(StudentTestResult), getStudentTestResult);
router.route("/").post(createStudentTestResult);



export default router;