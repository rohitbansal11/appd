import asyncHandler from "express-async-handler";
import ErrorResponse from "../../utils/errorResponse.js";
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import User from '../../models/User.js'
import bcrypt from 'bcryptjs'


// @desc       Change Password Form
// @route       Get    /api/v1/reset-password/user/:id
// @access     User
export const resetPasswordHtml = asyncHandler(async (req, res, next) => {

    let id = req?.params?.id;
    let user = await User.findById(id)

    if (!user) {
        res.sendFile(path.join(`${__dirname}../../../public/Error/VerifyError.html`));
    }
    res.sendFile(path.join(`${__dirname}../../../public/resetPassword/resetPassword.html`));
})



// @desc        Update Password
// @route       Post  /api/v1/reset-password/user/:id
// @access     user
export const resetPassword = asyncHandler(async (req, res, next) => {

    let id = req.params.id

    const { psd } = req.body

    const salt = await bcrypt.genSalt(10)
    let psdnew = await bcrypt.hash(psd, salt)


    let user = await User.findByIdAndUpdate(id, { password: psdnew })
    if (!user) {
        res.sendFile(path.join(`${__dirname}../../../public/Error/VerifyError.html`));
    } else {
        res.sendFile(path.join(`${__dirname}../../../public/resetPassword/passwordChanged.html`));
    }

})


