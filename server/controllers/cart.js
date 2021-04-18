import mongoose from 'mongoose';
import Cart from '../models/cart.js';

export const addToCart = async (req, res) => {
    try {
        const item = req.body;


        let _sessionId = req.signedCookies.sessionId;
        if (!_sessionId) {
            res.status(200).json({ message: "WR: Session ID not found!!!" })
        }

        if (!mongoose.Types.ObjectId.isValid(_sessionId)) return res.status(200).send('No session with id');

        const cart = await Cart.find({ sessionId: _sessionId })

        if (cart.length === 0) {
            const newCart = new Cart({ sessionId: _sessionId, products: item });
            await newCart.save();
        } else {
            const products = cart[0]["products"];
            let indexProduct = products.findIndex(q => q["_id"] == item["_id"]);
            if (indexProduct !== -1) {
                products[indexProduct]["quantity"] += item["quantity"];
            } else products.push(item)
            const updateCart = await Cart.findByIdAndUpdate(cart[0]["_id"], { products: products }, { new: true });
        }
        res.status(200).json({ message: "add to cart susscesfuly !!!" })
    } catch (error) {
        res.status(404).json({ message: error.message })
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
            res.status(200).json({messange : "CART EMPTY"})
        } else {
            //console.log(cart);
            //console.log(cart[0]["products"]);
            res.status(200).json(cart[0]["products"])
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}