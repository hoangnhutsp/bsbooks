import mongoose from 'mongoose';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const SECRET = 'bsbooksToken';

const createToken = (id) => {
    return jwt.sign({ id }, SECRET, {})
};


export const addUser = async (req, res) => {

    try {
        //check missing infornation
        if (!req.body.email || !req.body.password || !req.body.name || !req.body.phone || !req.body.address || !req.body.gender || !req.body.birthday)
            res.status(200).json({ message: "Please fill in all the information" })
        //check user already???
        const find_user = await User.find({ email: req.body.email })
        if (find_user.length !== 0)
            res.status(200).json({ message: "User Already" })
        else {
            //new user
            const user = req.body;
            const newUser = new User(user);
            await newUser.save();
            const curentlyUser = await User.find({ email: newUser.email })
            const token = createToken(curentlyUser._id);
            res.status(200).json({ result: newUser, token });

        }
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

export const Login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user.length !== 0) {
            if (user.password !== req.body.password)
                res.status(200).json({ message: "Nhập sai password" })
            else {
                const token = createToken(user._id);
                res.status(200).json({ result: user, token });
            }
        }
        else
            res.status(200).json({ message: "User không tồn tại" })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getProfileUser = async (req, res) => {
    try {
        const user = await User.find({ _id: req.userId.id });
        if (user.length !== 0)
            res.status(200).json(user);
        else
            res.status(200).json({ message: "User is't already" })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateUser = async (req, res) => {
    try {
        //check user already
        const user_find = await User.find({ _id: req.userId.id });
        if (user_find.length == 0)
            res.status(200).json({ message: "User is't already" })

        //Update profile
        const user = await User.findByIdAndUpdate(req.userId.id, {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            birthday: req.body.birthday,
        }, function (err, docs) { });
        res.status(200).json(user)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
