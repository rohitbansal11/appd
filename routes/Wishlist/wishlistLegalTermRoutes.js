import express from "express";
import {
    getWishlistLegalterm,
    addLegalTermToWishlist,
} from "../../controllers/WishlistLegalterm/wishlistLegalTermController.js";

const router = express.Router();

// middleware //
import { protect } from "../../middlewares/auth.js";

router.use(protect);
router.route("/").get(getWishlistLegalterm);
router.route("/:legalTermId").post(addLegalTermToWishlist);

export default router;
