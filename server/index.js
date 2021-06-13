import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session'
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

dotenv.config();
// middleware
import { sessionMiddleware } from "./middlewares/session.middleware.js"
//import { refreshTokenMiddleware } from "./middlewares/refreshToken.middleware.js"
// router
import cartRoutes from './routes/cart.js'
import productRoutes from './routes/product.js';
import userRouters from './routes/user.js'
import evaluateRouters from './routes/evaluate.js'
import categoryRoutes from './routes/category.js'
import invoiceRoutes from './routes/invoice.js'
import adminRouter from './routes/admin.js'
import notificationRouter from './routes/notification.js'

import recentlyViewd from './routes/recently_viewed.js'
import uploadImageRoutes from './routes/upload_image.js'
import addressRoutes from './routes/address.js'
import jwt from 'jsonwebtoken';


const app = express();


const SECRET = 'bsbooksToken';


var server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3000",
    }
  });

app.use(express.static('./public'));
app.use('./middleware/upload', express.static('upload'));


app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
const PORT = process.env.PORT || 5000;

const CONNECTION_URL = process.env.URL_MONGODB_LOCAL;
const dbOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}

app.use(session({
    secret: 'some secrec',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: CONNECTION_URL }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 
    }
}))


//socket
// const httpServer = createServer.Server(app);
// const io = new Server(httpServer);

//socket
io.on('connection', socket => {
    //console.log(socket.id + 'connect');
    console.log('Socket connect')
    socket.on('joinRoom', token => {
        const gettoken = token
        jwt.verify(gettoken, SECRET, (err, user) => {
            if(err) socket.emit('accept', {message: "wrong verify token"})
            else{
                let userId = user.id
                //mỗi user thuộc 1 room
                socket.join(userId);
                console.log('room: ' + userId)
            }
        })
    });
    socket.on('addNotification', async data => {

        console.log("LOG addNotification")

        const token = data.token;
        console.log(token);
        try {
            jwt.verify(token, SECRET, (err, user) => {
                if (!err) {
                    console.log('ServerSendNotification');
                    // check user is ADMIN
                    const title = data.title;
                    const description = data.description;
                    const id_user = data.id_user;
                    const image = data.image;
                    const _id = data._id;
                    console.log('TO');
                    io.to(id_user).emit('ServerSendNotification', {image, title, description, _id})
                };
            })
        } catch (error) {
            
        }
        
    })

    socket.on('disconnect', ()=>{
        console.log(socket.id + ' disconnect')
    })
})

app.use(sessionMiddleware);

app.use('/user', userRouters)
app.use('/cart', cartRoutes)
app.use('/evaluate', evaluateRouters)
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);
app.use('/recently_viewd', recentlyViewd)
app.use('/upload_image', uploadImageRoutes);
app.use('/address', addressRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/admin', adminRouter);
app.use('/notification', notificationRouter);

mongoose.connect(CONNECTION_URL, dbOptions)
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error.message)
});


