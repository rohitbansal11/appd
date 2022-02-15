import express from "express";
import { protect, authorize } from "../../middlewares/auth.js";
import { createMockTest, deleteMockTest, getAllMockTest, updateMockTest } from '../../controllers/MockTest/MockTestAdminController.js'

const router = express.Router();
import MockTest from "../../models/MockTest.js";
import advancedResults from "../../middlewares/advancedResults.js";

router.use(protect);
router.use(authorize('admin'))
router.route("/").get(advancedResults(MockTest), getAllMockTest);

router.route("/").post(createMockTest);
router.route('/:id').put(updateMockTest)
router.route('/:id').delete(deleteMockTest)

export default router;
