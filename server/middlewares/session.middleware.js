import mongoose from 'mongoose';
import Session from '../models/session.js';
export const sessionMiddleware = async (req, res, next) => {

    let _sessionId = null;
    if (!req.signedCookies.sessionId) {

        const newSession = new Session();

        try {
            await newSession.save();
        } catch (error) {

        }
        _sessionId = newSession["_id"];
        res.cookie('sessionId', _sessionId, {
            signed: true
        })


        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }

    //const session = await Session.find({})
    if (_sessionId === null)
        _sessionId = req.signedCookies.sessionId;
    console.log(`Logged -- session id: ${_sessionId}`);

    next();
}