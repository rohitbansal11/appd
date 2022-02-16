import express from "express";
import { setNewWordOfDay } from "../../controllers/WordOfDay/WordOfDayAdmin.js";

const router = express.Router();

// middleware //

import { protect } from "../../middlewares/auth.js";

router.use(protect);
router.route("/:wordId").put(setNewWordOfDay);

export default router;
