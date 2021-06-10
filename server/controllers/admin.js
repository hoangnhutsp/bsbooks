import mongoose from 'mongoose';
import User from '../models/user.js';

export const getAllUser = async(req, res) => {
    try {
        const allUser = await User.find();
        res.status(200).json(allUser)
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

export const getProfileUserById = async (req, res) => {
    try {
        //console.log(req.params.id);
        const id = req.params.id;
        const user = await User.findOne({ id: req.userID });

        if (user.length !== 0) {
            res.status(200).json(user);
        }
        else
            res.sentS(400)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}