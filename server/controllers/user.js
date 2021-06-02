import mongoose from 'mongoose';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET = 'bsbooksToken';

const createToken = (id) => {
    return jwt.sign({ id }, SECRET, { expiresIn: "30d" })
};


export const addUser = async (req, res) => {

    try {
        //check missing infornation
        if (!req.body.email || !req.body.password || !req.body.name ||
            !req.body.phone || !req.body.address || !req.body.gender ||
            !req.body.birthday || !req.body.confirmPassWord)
            res.status(200).json({ message: "Please fill in all the information" })
        //check password and confirmPassWord
        if (req.body.confirmPassWord !== req.body.password)
            res.status(200).json({ message: 'confirmPassWord not same password' });
        //check user already???
        const find_user = await User.find({ email: req.body.email })
        if (find_user.length !== 0)
            res.status(200).json({ message: "User Already" })
        else {
            const hashPassword = await bcrypt.hash(req.body.password, 12);
            //new user
            const userInf = {
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                password: hashPassword,
                address: req.body.address,
                gender: req.body.gender,
                birthday: req.body.birthday,
                token: []
            }
            const newUser = new User(userInf);
            await newUser.save();
            console.log(newUser._id);
            const creaToken = createToken(newUser._id);
            let token = newUser.token;
            token.push(creaToken);
            const user = await User.findByIdAndUpdate(newUser._id, { token: token }, { new: true });
            res.status(200).json({ result: user, token });

        }
    } catch (error) {
        res.status(409).json({ message: error.message })
    }

}

export const Login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user.length !== 0) {
            //kiểm tra password
            const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
            console.log('isPasswordCorrect', isPasswordCorrect);
            if (!isPasswordCorrect)
                res.status(200).json({ message: "Nhập sai password" })
            else {
                const token = createToken(user._id);
                let userToken = user.token;
                userToken.push(token);
                const userLogin = await User.findByIdAndUpdate(user._id, { token: userToken }, { new: true });
                console.log('token: ', token);
                res.status(200).json({ result: userLogin, token });
            }
        }
        else
            res.status(200).json({ message: "User không tồn tại" })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const Logout = async (req, res) => {
    try {
        const user = await User.find({ _id: req.userId.id });
        const token = req.headers.authorization.split(" ")[1];
        let tokenLogout = user[0]["token"];
        //Lấy những token khác với token đăng xuất để update vào database
        tokenLogout = tokenLogout.filter((tokens) => {
            return tokens !== token
        })
        const userLogout = await User.findByIdAndUpdate(req.userId.id, { token: tokenLogout }, { new: true });
        res.status(200).json(userLogout);
    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}

export const getProfileUser = async (req, res) => {
    try {
        const user = await User.find({ _id: req.userId.id });
        if (user.length !== 0) {
            //lấy và gửi lại token mới
            const token = req.refreshToken
            res.status(200).json({ result: user, token });
        }
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
        //lấy và gửi lại token mới
        const token = req.refreshToken
        res.status(200).json({ result: user, token });

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}




