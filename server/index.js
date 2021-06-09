import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session'
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'

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

import recentlyViewd from './routes/recently_viewed.js'
import uploadImageRoutes from './routes/upload_image.js'
import addressRoutes from './routes/address.js'

import {breadcrumb} from './controllers/other.js'
const app = express();


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


console.log(`MONGO URL: ${process.env.URL_MONGODB}`);

app.use(session({
    secret: 'some secrec',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.URL_MONGODB }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 
    }
}))

app.use(sessionMiddleware);
//app.use(refreshTokenMiddleware);

app.use('/user', userRouters)
app.use('/cart', cartRoutes)
app.use('/evaluate', evaluateRouters)
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);
app.use('/recently_viewd', recentlyViewd)
app.use('/upload_image', uploadImageRoutes);
app.use('/address', addressRoutes);
app.use('/invoice', invoiceRoutes);
app.use('/breadcrumb' , breadcrumb);


mongoose.connect(CONNECTION_URL, dbOptions)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error.message)
    });


