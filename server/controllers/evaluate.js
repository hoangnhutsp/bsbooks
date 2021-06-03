import mongoose from 'mongoose';
import Evaluate from '../models/evaluate.js';
import User from '../models/user.js';
import Product from '../models/product.js';

export const addEvaluate = async (req, res) => {
    try {
        //idUser, idProduct, star not null
        if (!req.userId.id || !req.body.idProduct || !req.body.star ||
            typeof req.userId.id == 'default' || typeof req.body.idProduct == 'default' || typeof req.body.star == 'default') {
            res.status(200).json({ message: 'idUser or idProduct or star null' })
        }
        else {
            const idUser = req.userId.id;
            const idProduct = req.body.idProduct;
            let user = await User.find({ _id: idUser });
            let product = await Product.findOne({ _id: idProduct });
            //check user and product exist
            if (user.length === 0 || product.length === 0) {
                res.status(200).json({ message: 'User or Product not exist' });
            }
            else {
                const star = req.body.star;
                let comment = req.body.comment;
                //check comment 
                if (!comment || typeof comment == 'default')
                    comment = null;
                const newEvaluate = new Evaluate({
                    idUser: idUser,
                    idProduct: idProduct,
                    star: star,
                    comment: comment,
                });
                await newEvaluate.save();
                res.status(200).json(newEvaluate);
            }
        }

    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}

export const getEvaluateToProduct = async (req, res) => {
    try {
        const idProduct = req.params.idProduct;
        let product = await Product.find({ _id: idProduct })
        //check product not exist
        if (product.length === 0) {
            res.status(200).json({ message: 'Product not exist' });
        }
        else {
            const evaluate = await Evaluate.find({ idProduct: idProduct })
            res.status(200).json(evaluate);
        }

    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}

export const updateEvaluateToStar = async (req, res) => {
    try {
        //check date creatAt,  star or user not null
        if (!req.body.createAt || typeof req.body.createAt == 'default' || 
        !req.body.star || typeof req.body.star == 'default' ||
        !req.userId.id || typeof req.userId.id == 'default') {
            res.status(200).json({ message: 'CreateAt or star is null' });
        }
        else {
            const idUser = req.userId.id;
            const idProduct = req.params.idProduct;
            const createAt = req.body.createAt;
            const star = req.body.star;
            const user = await User.find({ _id: idUser });
            const product = await Product.find({ _id: idProduct });
            // check product and user exist
            if (user.length === 0 || product.length === 0) {
                res.status(200).json({ message: 'User or Product not exist' });
            }
            else {
                const updateEvalueteStar = await Evaluate.findOneAndUpdate({
                    idUser: idUser,
                    idProduct: idProduct,
                    createAt: createAt
                }, { star: star }, { new: true });
                res.status(200).json(updateEvalueteStar);
            }
        }
    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}
export const updateEvaluateToComment = async (req, res) => {
    try {
        //check date creatAt or star not null
        if (!req.body.createAt || typeof req.body.createAt == 'default' || 
        !req.body.comment || typeof req.body.comment == 'default' ||
        !req.userId.id || typeof req.userId.id == 'default') {
            res.status(200).json({ message: 'CreateAt or comment is null' });
        }
        else {
            const iduser = req.userId.id;
            const idProduct = req.params.idProduct;
            const createAt = req.body.createAt;
            const comment = req.body.comment;
            const user = await User.find({ _id: iduser });
            const product = await Product.find({ _id: idProduct });
            // check product and user exist
            if (user.length === 0 || product.length === 0) {
                res.status(200).json({ message: 'User or Product not exist' });
            }
            else {
                const updateEvalueteComment = await Evaluate.findOneAndUpdate({
                    idUser: iduser,
                    idProduct: idProduct,
                    createAt: createAt
                }, { comment: comment }, { new: true });
                res.status(200).json(updateEvalueteComment);
            }
        }
    } catch (error) {
        res.status(404).json({ message: message.error });
    }
}