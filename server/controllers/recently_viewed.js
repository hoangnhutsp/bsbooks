"use strict";

import Product from '../models/product.js';
import RecentlyViewed from '../models/recently_viewed.js'
import mongoose from 'mongoose';

const DEFAULT_SIZE_RECENTLY_VIEWED = 5;

export const getRecentlyViewed = async (req, res) => {
    try {
        let id_session = req.sessionID;
        let id_user = req.userID || "";

        let recentlyViewed = await RecentlyViewed
            .find({
                id_session,
                id_user,
            })
            .sort({ createdAt: "desc" })
            .limit(DEFAULT_SIZE_RECENTLY_VIEWED);

        res.status(200).send(recentlyViewed);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateRecentlyViewed = async (req, res, next) => {
    try {
        let id_product = req.params.id;
        let id_user = req.userID || "";
        let id_session = req.sessionID;

        const recentlyView = {
            id_user,
            id_session,
            id_product,
        };

        const re = await RecentlyViewed.findOneAndUpdate({
            id_user,
            id_session,
            id_product,
        },
            { createdAt: new Date() }
        )
        if (!re) {
            const newRecentlyViewed = new RecentlyViewed(recentlyView);
            await newRecentlyViewed.save();
        }

        next();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}