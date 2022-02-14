import express from "express";
import {
  getStikyLandMark,
  updateStikyLandMark,
} from "../../controllers/Sticky/StickyLandmark.js";

const router = express.Router();

// middleware //
import { protect, authorize } from "../../middlewares/auth.js";

router.use(protect);
router.route("/").get(getStikyLandMark);
router.route("/:landMarkId").put(updateStikyLandMark);

export default router;
