'use strict';
import dotenv from 'dotenv'

dotenv.config();
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import mailgun from 'mailgun-js';
import { OAuth2Client } from 'google-auth-library';
import { lchown } from 'fs';
import { RSA_NO_PADDING } from 'constants';

const DOMAIN_MAIL_GUN = process.env.DOMAIN_MAIL_GUN;
const API_KEY_MAIL_GUN = process.env.API_KEY_MAIL_GUN;

//oAuth
const CLIENT_ID = '551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com';
const CLIENT_SECRET = 'AC6CUSWFSQW0Zrxm7fUdwnE-';

const mg = mailgun({ apiKey: API_KEY_MAIL_GUN, domain: DOMAIN_MAIL_GUN });
const client = new OAuth2Client(CLIENT_ID)

const RESET_PASSWORD = 're-pass bsbook';
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

    let status = 1;
    try {
        let info = req.body;
        if (!checkInfo(info)) {
            status = 0;
            res.status(200).send({ status, message: 'Thong tin khong hop le' })
        }
        let email = info.email;
        const find_user = await User.find({ email })
        if (find_user.length !== 0) {
            status = 0;
            res.status(200).send({ status, message: 'Email da duoc su dung' })
        } else {

            const hashPassword = await bcrypt.hash(info.password, 12);
            info.password = hashPassword;

            const newUser = new User(info);
            await newUser.save();

            const token = createToken(newUser._id);
            res.status(200).json({ status, user: newUser, token });
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
                res.status(200).json({ status: 0, message: 'Sai mat khau' });
            else {
                const token = createToken(user._id);
                res.status(200).json({ status: 1, user, token });
            }
        }
        else
            res.status(200).json({ status: 0, message: 'Email khong ton tai' });

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const Logout = async (req, res) => {
    try {
        console.log(req.userID);
        res.status(200).json({ message: "ok" });
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

//Login with FaceBook

const getAvatarFacebook = async (userID, accessToken) => {
    let urlGraphFaceBook = `https://graph.facebook.com/${userID}/photos?fields=height,width&access_token=${accessToken}`
    axios.get(urlGraphFaceBook)
        .then(res => res.data)
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
}
export const loginFacebook = async (req, res) => {

    console.log('login facebook');
    const userID = req.body.userID;
    const accessToken = req.body.accessToken;
    let urlGraphFaceBook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`
    console.log(urlGraphFaceBook);
    let email, name;
    await axios.get(urlGraphFaceBook)
        .then((res) => res.data)
        .then(data => {
            email = data.email;
            name = data.name;
        })
        .catch(err => {
            res.sendStatus(400);
        })

    try {
        const user = await User.findOne({ email })
        if (user) {
            const token = createToken(user._id);
            res.status(200).json({ status: 1, user, token })
        } else {
            await getAvatarFacebook(userID, accessToken);
            const userInf = {
                name: name,
                phone: '',
                email: email,
                address: '',
                gender: 'male',
            }
            const newUser = new User(userInf);
            await newUser.save();
            const token = createToken(newUser._id);
            res.status(200).json({ status: 1, user: newUser, token });
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const forgotPassWord = async (req, res) => {
    try {
        const email = req.body.email;
        console.log(email);

        const user = await User.findOne({ email });
        console.log(user);
        if (!user)
            res.status(200).json({ status: 0, message: 'User not exist' })
        else {
            const token = jwt.sign({ id: user._id }, RESET_PASSWORD, { expiresIn: "20m" })
            console.log(token)
            console.log('send mail')
            const data = {
                from: '18520135@gm.uit.edu.vn',
                to: email,
                subject: 'Quên mật khẩu Bsbooks',
                html: `
                <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
                <h2 style="text-align: center; text-transform: uppercase;color: teal;">Quen mat khau</h2>
                <p>Chào mừng bạn đến với Bsbooks.
                    Bạn hãy Nhấn vào đây để đổi mật khẩu.
                </p>
                
                <a href="https://www.facebook.com/" style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Clickme</a>
            
                <p>Nếu không nhấn vào bên trên vì một số lỗi kĩ thuật được thì bạn hãy truy cập vào đường dẫn này: 
                </p>
            
                <div>"http://localhost:3000/reset-password/${token}"</div>
                </div>
                `
            }
            const updateLink = await User.findByIdAndUpdate(user._id, { resetLink: token }, { new: true });
            await mg.messages().send(data, function (error, body) {
                if (error) {
                    res.status(200).json({ status: 0, message: 'api wrong'})
                }
                else res.status(200).json({ status: 1})
            });
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const resetPassWord = async (req, res) => {
    try {

        
        const resetLink = req.params.token;
        //Kiểm tra new pass và confirmpass rỗng
        const decodedData = jwt.verify(resetLink, RESET_PASSWORD);
        const idUser = decodedData.id;
        const password = req.body.password;
        const hashPassword = await bcrypt.hash(password, 12);
        await User.findByIdAndUpdate(idUser, { password: hashPassword})
        res.status(200).json({ status: 1 })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Login with google
export const googleLogin = async (req, res) => {
    try {
        const tokenId = req.body.tokenId;
        let payload;
        await client.verifyIdToken({ idToken: tokenId, audience: '551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com' })
            .then(resp => payload = resp.payload)
            .catch((error) => {
                res.status(400).json({ status: 0, message: `idToken verify wr ${error.message}` })
            })

        let email = payload.email;
        if (payload.email_verified) {
            const user = await User.findOne({ email })
            if (user) {
                const token = createToken(user._id);
                res.status(200).json({ status: 1, user, token })
            } else {

                const userInf = {
                    name: payload.name,
                    email: email,
                    avatar: payload.picture,
                    address: '',
                    gender: 'male',
                    phone: '',
                }
                const newUser = new User(userInf);
                await newUser.save();
                const token = createToken(newUser._id);
                res.status(200).json({ status: 1, user: newUser, token })
            }
        } else res.status(400).json({ status: 0, message: 'wr' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


const checkInfoPassword = password => {
    return true;
}


export const changePassword = async (req, res) => {
    try {
        const currentPassword = req.body.currentPassword;
        const newPassword = req.body.newPassword;
        const userID = req.userID;

        if (!checkInfoPassword(currentPassword) || !checkInfoPassword(newPassword) || currentPassword === newPassword) {
            return res.status(200).json({ status: 0, message: "Mat khau khong hop le" });
        }

        const { password } = await User.findOne({ _id: userID });
        if (password !== null) {
            const isPasswordCorrect = await bcrypt.compare(currentPassword, password)
            if (!isPasswordCorrect)
                res.status(200).json({ status: 0, message: 'Sai mat khau' });
            else {
                const hashPassword = await bcrypt.hash(newPassword, 12);
                await User.findByIdAndUpdate(userID, { password: hashPassword });
                res.status(200).json({ status: 1, message: 'Doi mat khau thanh cong' });
            }
        }
        else
            res.status(200).json({ status: 0, message: 'Email khong ton tai' });

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


