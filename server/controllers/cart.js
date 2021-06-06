import mongoose from 'mongoose';
import Cart from '../models/cart.js';
import User from '../models/user.js';


const checkInfoCart = cart => {

    return true;
}
const checkUserID = userID => {
    return true;
}
export const addToCart = async (req, res) => {
    try {
        let infoCart = req.body.cart;
        let userID = "1234";

        if (!checkUserID(userID) || !checkInfoCart(infoCart)) {
            res.status(200).json({
                status: 0,
                message: 'wr userID, or info cart'
            });
        }
        else {

            let count = infoCart.length;
            const cart = await Cart.findOne({ userID });
            if (!cart) {
                const newCart = new Cart({
                    userID,
                    infoCart,
                    count,
                    status: 0,
                });
                await newCart.save();
            }
            else {
                console.log('sol found in cart');
            }
            res.status(200).json({ message: 'Add cart successful' });
        }
    } catch (error) {
        res.status(404).json({ message: message.error })
    }
}


export const getCartItem = async (req, res) => {
    try {
        const item = req.body;
        let _sessionId = req.signedCookies.sessionId;
        if (!_sessionId) {
            res.status(200).json({ message: "WR: Session ID not found!!!" })
        }

        if (!mongoose.Types.ObjectId.isValid(_sessionId)) return res.status(200).send('No session with id');

        const cart = await Cart.find({ sessionId: _sessionId })

        if (cart.length === 0) {
            res.status(200).json({ messange: "CART EMPTY" })
        } else {

            res.status(200).json(cart[0]["products"])
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}