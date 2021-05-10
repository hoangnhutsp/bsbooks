import mongoose from 'mongoose';
import Session from '../models/session.js';
export const sessionMiddleware = async (req, res, next) => {
    let sessionId = req.sessionID;
    console.log(sessionId);
    next()
}