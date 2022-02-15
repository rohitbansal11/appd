import express from "express";
import { protect, authorize } from "../../middlewares/auth.js";
import {  getAllPQY} from "../../controllers/PYQ/PYQController.js";

const router = express.Router();
import PYQModal from "../../models/PYQModal.js";
import advancedResults from "../../middlewares/advancedResults.js";

router.use(protect);
router.route("/").get(advancedResults(PYQModal), getAllPQY);


export default router;