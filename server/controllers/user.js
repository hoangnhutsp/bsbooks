import mongoose from 'mongoose';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import fetch from 'node-fetch';
import mailgun from 'mailgun-js';
import { OAuth2Client } from 'google-auth-library';

const DOMAIN = 'sandboxfd6f315452fe4242b1419326999c6fb1.mailgun.org';
const API_KEY = '32fd788756cf15d67e0c41b93bc95b16-1d8af1f4-4b0568a1';
//oAuth
const CLIENT_ID = '551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com';
const CLIENT_SECRET = 'AC6CUSWFSQW0Zrxm7fUdwnE-';

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
const client = new OAuth2Client("551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com")

const RESET_PASSWORD = 're-pass bsbook';
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

//Login with FaceBook
export const loginFacebook = async (req, res) => {
    let email = '';
    let name = '';
    const userID = req.body.userID;
    console.log('userID', userID)
    const accessToken = req.body.accessToken;
    console.log('accessToken', accessToken)

    let urlGraphFaceBook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`
    await fetch(urlGraphFaceBook,
        {
            method: "GET"
        })
        .then(resp => resp.json())
        .then(resp => {
            //console.log(resp.email)
            email = resp.email
            name = resp.name
        })
    try {
        const user = await User.findOne({ email })
        if (user) {
            console.log('Login')
            const token = createToken(user._id);
            let userToken = user.token;
            userToken.push(token);
            const userLogin = await User.findByIdAndUpdate(user._id, { token: userToken }, { new: true });
            res.status(200).json({ result: userLogin, token })
        } else {
            console.log("Register")
            let password = email + 'Bsbooks';
            const hashPassword = await bcrypt.hash(password, 12);
            //new user
            const userInf = {
                name: name,
                phone: '',
                email: email,
                password: hashPassword,
                address: '',
                gender: '',
                birthday: '',
                token: []
            }
            const newUser = new User(userInf);
            await newUser.save();
            const creaToken = createToken(newUser._id);
            let token = newUser.token;
            token.push(creaToken);
            const currentUser = await User.findByIdAndUpdate(newUser._id, { token: token }, { new: true });
            res.status(200).json({ result: currentUser, token });
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
            res.status(200).json({ message: 'User not exist' })
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
                <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the DevAT channel.</h2>
                <p>Chào mừng bạn đến với Bsbooks.
                    Bạn hãy Nhấn vào đây để đổi mật khẩu.
                </p>
                
                <a href="https://www.facebook.com/" style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">Clickme</a>
            
                <p>Nếu không nhấn vào bên trên vì một số lỗi kĩ thuật được thì bạn hãy truy cập vào đường dẫn này: 
                </p>
            
                <div>"https://www.facebook.com/"</div>
                </div>
                `
            }
            const updateLink = await User.findByIdAndUpdate(user._id, { resetLink: token }, { new: true });
            await mg.messages().send(data, function (error, body) {
                if (error) {
                    res.status(200).json({ message: error.message })
                }
                else res.status(200).json({ result: updateLink, token })
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
        if (!req.body.password || !req.body.confirmPassword)
            res.status(400).json({ message: 'Password hoặc confirmPassword rỗng hoặc ko trùng nhau' })
        else {
            if (req.body.confirmPassword !== req.body.password) {
                res.status(400).json({ message: 'ConfirmPassword not same password' })
            } else {
                const decodedData = jwt.verify(resetLink, RESET_PASSWORD);
                const idUser = decodedData.id;
                //console.log(idUser);
                //kiểm tra user
                const user = await User.findById(idUser);
                if (!user)
                    res.status(200).json('User not exist');
                else {
                    //kiểm tra trùng resetLink
                    if (user.resetLink !== resetLink)
                        res.status(200).json('ResetLink incorrect')
                    else {
                        const password = req.body.password;
                        const hashPassword = await bcrypt.hash(password, 12);
                        const updateUser = await User.findByIdAndUpdate(idUser, { password: hashPassword, resetLink: '' }, { new: true })
                        res.status(200).json({ result: updateUser })
                    }
                }
            }

        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Login with google
export const googleLogin = async (req, res) => {
    try {
        let email_verified = '';
        let name = '';
        let email = ''
        const tokenId = req.body.tokenId;
        //console.log(tokenId)
        await client.verifyIdToken({ idToken: tokenId, audience: '551410903005-ev094ec2i9f5j9p2sqmaqv65ic81eg68.apps.googleusercontent.com' })
            .then(resp => {
                email_verified = resp.payload.email_verified;
                name = resp.payload.name;
                email = resp.payload.email;
                console.log(resp.payload);

            })
            .catch((error) => {
                console.log('Error:', error);
            })
        console.log(email_verified);
        if (email_verified) {
            const user = await User.findOne({ email })
            console.log(user);
            if (user) {
                console.log('Update user')
                const token = createToken(user._id);
                let userToken = user.token;
                userToken.push(token);
                const userLogin = await User.findByIdAndUpdate(user._id, { token: userToken }, { new: true });
                res.status(200).json({ result: userLogin, token })
            } else {
                console.log("Register")
                let password = email + 'Bsbooks';
                const hashPassword = await bcrypt.hash(password, 12);
                //new user
                const userInf = {
                    name: name,
                    phone: '',
                    email: email,
                    password: hashPassword,
                    address: '',
                    gender: '',
                    birthday: '',
                    token: []
                }
                const newUser = new User(userInf);
                await newUser.save();
                console.log(newUser)
                const creaToken = createToken(newUser._id);
                let token = newUser.token;
                token.push(creaToken);
                const currentUser = await User.findByIdAndUpdate(newUser._id, { token: token }, { new: true });
                res.status(200).json({ result: currentUser, token })
            }
        }

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


