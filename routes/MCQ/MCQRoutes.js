import express from "express";
import { protect, authorize } from "../../middlewares/auth.js";
import { getAllMCQ} from "../../controllers/MCQ/MCQController.js";

const router = express.Router();
import MCQModal from "../../models/MCQModal.js";
import advancedResults from "../../middlewares/advancedResults.js";

router.use(protect);
router.route("/").get(advancedResults(MCQModal), getAllMCQ);


export default router;