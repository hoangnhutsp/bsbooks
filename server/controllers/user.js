import mongoose from 'mongoose';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { lchown } from 'fs';

const SECRET = 'bsbooksToken';

const createToken = (id) => {
    return jwt.sign({ id }, SECRET, { expiresIn: "30d" })
};


const checkInfo = (info) => {
    if (!info.email || !info.password || !info.name ||
        !info.phone || !info.address || !info.gender ||
        !info.birthday) return 0;

    return 1;
}


export const addUser = async (req, res) => {

    try {

        // console.log(`INFO: ${info}`);
        let info = req.body;
        if (!checkInfo(info)) {
            res.status(400).json({ message: "Please fill in all the information" })
        }
        let email = info.email;
        const find_user = await User.find({ email })
        if (find_user.length !== 0)
            res.status(400).json({ message: "User Already" })
        else {

            const hashPassword = await bcrypt.hash(info.password, 12);
            info.password = hashPassword;

            const newUser = new User(info);
            await newUser.save();

            const token = createToken(newUser._id);
            res.status(200).json({ user: newUser, token});
        }
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const Login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            if (!isPasswordCorrect)
                res.status(200).json({status: 0, message: 'Sai mat khau'});
            else {
                const token = createToken(user._id);
                res.status(200).json({ status: 1, user, token });
            }
        }
        else
            res.status(200).json({status: 0, message: 'Email khong ton tai'});

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const Logout = async (req, res) => {
    try {
        console.log(req.userID);
        res.status(200).json({message: "ok"});
    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}

export const getProfileUser = async (req, res) => {
    try {
        console.log(req.userID);
        const user = await User.findOne({ _id: req.userID });

        if (user.length !== 0) {
            res.status(200).json(user);
        }
        else
            res.sentS(400)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const user_find = await User.findOne({ _id: req.userID });
        if (user_find.length == 0)
            res.status(400).json({ message: "User is't already" })

        const info = req.body;
        const user = await User.findByIdAndUpdate(req.userID, info);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}




