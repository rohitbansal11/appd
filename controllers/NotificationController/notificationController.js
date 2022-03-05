import Notification from '../../models/Notification.js'
import asyncHandler from 'express-async-handler'
import ErrorResponse from '../../utils/errorResponse.js'
import NotificationCheck from '../../models/NotificationCheck.js'

// @desc        Get all Notification
// @route       GET   /api/v1/notification
// @access      Public
export const getNotification = asyncHandler(async (req, res, next) => {
    let notificationcheck = await NotificationCheck.find({})
    let id = notificationcheck[0]._id
    var today_date = new Date();
    var compare_date = new Date(notificationcheck[0].verifyDate);
    var today_date_check = today_date.getDay() + ":" + today_date.getMonth() + ":" + today_date.getFullYear()+ 'T' + today_date.getHours() + ':' + today_date.getMinutes();
    var compare_date_check = compare_date.getDay() + ":" + compare_date.getMonth() + ":" + compare_date.getFullYear()+ 'T' + compare_date.getHours() + ':' + compare_date.getMinutes();
    let compare = today_date_check < compare_date_check

    if (compare) {
       
        SentAllNotification(200, res)
    } else {
        var today_date_for_expire = new Date();
        today_date_for_expire.setHours( today_date_for_expire.getHours() + 1 );
        await NotificationCheck.findByIdAndUpdate(id, { verifyDate: today_date_for_expire })
       CheckExpireDate(200, res)
    }
})


const SentAllNotification = async (statusCode, res) => {
    let dataVelue = await Notification.find({})
    res.status(statusCode).json({
        success: true,
        data: dataVelue
    })
}

const CheckExpireDate = async (statusCode, res) => {
    let AllNotification = await Notification.find({})
    var today_date = new Date();
    var today_date_check = today_date.getDay() + ":" + today_date.getMonth() + ":" + today_date.getFullYear() + 'T' + today_date.getHours() + ':' + today_date.getMinutes();
    let arr = []
    await AllNotification.map(async (w) => {
        var compare_date = new Date(w.expiredate);
        var expire_date_check = compare_date.getDay() + ":" + compare_date.getMonth() + ":" + compare_date.getFullYear() + 'T' + compare_date.getHours() + ':' + compare_date.getMinutes();
        let compare = today_date_check > expire_date_check
        if (compare) {
             await Notification.findByIdAndDelete(w._id)
        } else {
            arr.push(w)
        }
    })
    res.status(statusCode).json({
        success: true,
        data: arr
    })
}

// export const updateNotification = asyncHandler(async (req, res, next) => {
//     const { verifyDate} =req.body
//     const date = await NotificationCheck.create({
//         verifyDate
//       })
//       res.json({
//           success:true,
//           date
//       })
// })



