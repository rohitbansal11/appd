import express from "express";
import { protect, authorize } from "../../middlewares/auth.js";
import { createMCQ, deleteMCQ, getAllMCQ, updateMCQ } from "../../controllers/MCQ/MCQAdminController.js";

const router = express.Router();
import MCQModal from "../../models/MCQModal.js";
import advancedResults from "../../middlewares/advancedResults.js";

router.use(protect);
router.use(authorize('admin'))
router.route("/").get(advancedResults(MCQModal), getAllMCQ);
router.route("/").post(createMCQ);
router.route('/:id').put(updateMCQ)
router.route('/:id').delete(deleteMCQ)

export default router;
