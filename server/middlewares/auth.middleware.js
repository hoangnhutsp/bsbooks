import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET = 'bsbooksToken';

const Auth = async (req, res, next) => {
    try {
        console.log('Auth');
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) return res.status(400).json({message: 'token null'});

        jwt.verify(token, SECRET, (err, user) => {
            if (err) return res.status(200).json({message: 'wrong verify token'}); else
            {   
                console.log('pass');
                req.userID = user.id;
                next();
            }
        })
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default Auth;