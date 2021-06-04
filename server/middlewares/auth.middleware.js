import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET = 'bsbooksToken';

const Auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);

        jwt.verify(token, SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.userID = user.id;
        })
        next();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default Auth;