import mongoose from 'mongoose';
import Cart from '../models/cart.js';
import User from '../models/user.js';

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


export const addCart = async (req, res) => {
    try {
        let products = req.body.products;
        let idUser = req.userId.id;
        //check idUser và products trống
        if (!idUser || !products) {
            
            res.status(200).json({ message: "idUser hoặc products rỗng" });
        }
        else {
            //check product is arr rong
            if (products.length === 0) {
                res.status(200).json({ message: 'list products phải có ít nhất 1 phần tử' });
            }
            else {
                //check user
                let user = await User.findOne({ _id: idUser });
                if (!user) {
                    res.status(200).json({ message: "User not found" });
                }
                else {
                    let index = products.length;
                    const cart = await Cart.find({ idUser: idUser });
                    //Cart of User null
                    if (cart.length === 0) {
                        const newCart = new Cart({
                            idUser: idUser,
                            products: products
                        });
                        await newCart.save();
                    }
                    else {
                        for (var i = 0; i < index; i++) {
                            let productsInCart = cart[0]["products"];
                            let indexProduct = productsInCart.findIndex(q => q["_id"] == products[i]["_id"]);
                            if (indexProduct !== -1) {
                                productsInCart[indexProduct]["quantity"] += products[i]["quantity"];
                            } else productsInCart.push(products[i])
                            let updateCart = await Cart.findByIdAndUpdate(cart[0]["_id"], { products: productsInCart }, { new: true });
                        }
                    }
                    res.status(200).json({ message: 'Add cart successful' });
                }
            }
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