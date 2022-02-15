import express from "express";
import { protect, authorize } from "../../middlewares/auth.js";
import { getAllMockTest } from '../../controllers/MockTest/MocktTestController.js'

const router = express.Router();
import MockTest from "../../models/MockTest.js";
import advancedResults from "../../middlewares/advancedResults.js";

router.use(protect);
router.route("/").get(advancedResults(MockTest), getAllMockTest);


export default router;