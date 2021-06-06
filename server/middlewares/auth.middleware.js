import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET = 'bsbooksToken';

const Auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.status(400).json({message: 'token null'});

        console.log(token);
        jwt.verify(token, SECRET, (err, user) => {
            if (err) return res.status(200).json({message: 'wrong verify token'}); else
            {   
                req.userID = user.id;
                next();
            }
        })
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default Auth;