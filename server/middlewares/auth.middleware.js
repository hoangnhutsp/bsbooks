import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const SECRET = 'bsbooksToken';

const Auth = async (req, res, next) => {
    try {
        if (!req.headers.authorization)
            res.status(200).json({message: 'Token not exist'});
        if (req.headers.authorization.split(" ")[1] === 'undefined')
            res.status(200).json({ message: 'Bạn cần đăng nhập' });
        else {
            const token = req.headers.authorization.split(" ")[1];
            let decodedData = jwt.verify(token, SECRET);
            const user = await User.find({_id: decodedData.id});
            if (user.length === 0)
            {
                res.status(200).json({message: 'User not exist'});
            }
            else
            {
                if (!req.oldToten.includes(req.headers.authorization.split(" ")[1]))
                    res.status(200).json({message: 'Bạn cần đăng nhập'})
                else
                    req.userId = decodedData;
            }
        }
        next();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default Auth;