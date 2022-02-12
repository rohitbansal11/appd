import express from "express";
import {
  getStickyDocument,
  updateStickyDocument,
} from "../../controllers/Sticky/StickyLandmark.js";

const router = express.Router();

// middleware //
import { protect, authorize } from "../../middlewares/auth.js";

router.use(protect);
router.route("").get(getStickyDocument);
router.route("/:documentId").put(updateStickyDocument);

export default router;
