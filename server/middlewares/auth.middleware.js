import jwt from 'jsonwebtoken';

const SECRET = 'bsbooksToken';

const Auth = async (req, res, next) => {
    try {
        if (req.headers.authorization.split(" ")[1] === 'undefined')
            res.status(200).json({ message: 'Bạn cần đăng nhập' });
        else {
            const token = req.headers.authorization.split(" ")[1];
            let decodedData = jwt.verify(token, SECRET);
            req.userId = decodedData;
        }
        next();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export default Auth;