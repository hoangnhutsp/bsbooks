import mongoose from 'mongoose';
import Session from '../models/session.js';
export const sessionMiddleware = async (req, res, next) => {
    if (!req.signedCookies.sessionId) {
        
        const newSession = new Session();

        try {
            await newSession.save();
        } catch (error) {
            
        }
        let _sessionId = newSession["_id"];
        res.cookie('sessionId', _sessionId, {
            signed: true
        })
    }
    
    //const session = await Session.find({})
    let sessionId = req.signedCookies.sessionId;
    console.log(`Logged -- session id: ${sessionId}`);

    next();
}