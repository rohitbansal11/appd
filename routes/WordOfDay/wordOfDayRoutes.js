import express from "express";
import { getWordOfDay } from "../../controllers/WordOfDay/WordOfDay.js";

const router = express.Router();

// middleware //

import { protect } from "../../middlewares/auth.js";

router.use(protect);
router.route("/").get(getWordOfDay);

export default router;
