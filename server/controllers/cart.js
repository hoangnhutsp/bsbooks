'use strict';

import Cart from '../models/cart.js';


const checkInfoCart = cart => {
    return true;
}
const checkUserID = userID => {
    return true;
}
export const addToCart = async (req, res) => {
    try {
        let infoCart = req.body;
        let userID = req.userID;

        if (!checkUserID(userID) || !checkInfoCart(infoCart)) {
            res.status(200).json({
                status: 0,
                message: 'wr userID, or info cart'
            });
        }
        else {
            let count = 1;
            const cart = await Cart.findOne({ userID });
            if (!cart) {
                const newCart = new Cart({
                    userID,
                    items: infoCart,
                    count,
                    status: 0,
                });
                await newCart.save();
            }
            else {
                const items = cart["items"];
                console.log(items);
                let indexItem = items.findIndex(q => q["_id"] == infoCart["_id"]);
                console.log(indexItem);
                if (indexItem !== -1) {
                    items[indexItem]["quantity"] += infoCart["quantity"];
                } else items.push(infoCart)

                await Cart.findByIdAndUpdate(cart["_id"], { items }, { new: true });
            }
            res.status(200).json({ message: 'Add cart successful' });
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const resDataCart = {
    count: 0,
    items: [],
}
export const getCartItem = async (req, res) => {
    try {
        let userID = req.userID;
        const filter = {
            userID: {$eq : userID},
            status: {$eq : 0},
        }

        let cart = await Cart.findOne(filter);

        if (cart) {
            resDataCart.items = cart.items;
            resDataCart.count = cart.count;
        }

        res.status(200).json(resDataCart)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateCart = async (req, res) => {
    try {
        let userID = req.userID;
        let infoCart = req.body;
        const filter = {
            userID: {$eq : userID},
            status: {$eq : 0},
        }
        const doc = await Cart.findOneAndUpdate(filter, infoCart, {new: true});
        res.status(200).json(doc)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}