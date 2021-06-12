"use strict";
import Notification from "../models/notification.js";

export const addNotification = async (req, res) => {
    try {
        const id_user = req.userID;
        if (!req.body.title || !req.body.description)
            res.status(200).json({ message: 'Vui lòng nhập đầy đủ title và description' })
        else {
            const title = req.body.title;
            const description = req.body.description
            const newNotification = new Notification({
                id_user: id_user,
                title: title,
                description: description
            })
            await newNotification.save()
            res.status(200).json(newNotification);
        }
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

//lấy tất cả thông báo dựa trên id_user
export const getNotificationByIdUser = async (req, res) => {
    try {
        const id_user = req.userID;
        const notification = await Notification.find({ id_user: id_user })
        res.status(200).json(notification)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

//cập nhật trạng thái 
export const updateStatus = async (req, res) => {
    try {
        const id_user = req.userID;
        const updateNotification = await Notification.updateMany({ id_user: id_user }, { status: 1 }, { insert: false })
        if (!updateNotification)
            res.status(200).json({ status: 0, message: 'Lỗi cập nhật...' })
        else res.status(200).json({ status: 1 })
    } catch (error) {
        res.status(200).json({ status: 0, message: error.message })
    }
}
