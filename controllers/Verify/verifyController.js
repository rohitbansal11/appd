import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import User from '../../models/User.js'




// @desc        Verified User
// @route       Get    /api/v1/verify/user/:id
// @access     user
export const VerifyUser = asyncHandler(async (req, res, next) => {
    let id =req?.params?.id;
    let user =await User.findById(id)
   if(!user){
    res.sendFile(path.join(`${__dirname}../../../public/Error/VerifyError.html`));
   }
    await User.findByIdAndUpdate(id,{verified:true})
    res.sendFile(path.join(`${__dirname}../../../public/verify/Verify.html`));
})




