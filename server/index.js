import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session'
import MongoStore from 'connect-mongo';


// middleware
import { sessionMiddleware } from "./middlewares/session.middleware.js";


// router
import productRoutes from './routes/product.js';
import cartRoutes from './routes/cart.js';
import searchRoutes from './routes/search.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({credentials: true, origin: '*'}))
const PORT = process.env.PORT || 5000;

const CONNECTION_URL = 'mongodb://localhost:27017/bsbooks';
const dbOptions = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}

app.use(session({
    secret: 'some secrec',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/bsbooks' }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 
    }
}))

app.use(sessionMiddleware)
app.use('/product', productRoutes)
app.use('/search', searchRoutes)
app.use('/', (req, res) => {
    console.log(req.sessionID);
    res.status(200).send('ok')
})
mongoose.connect(CONNECTION_URL, dbOptions)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error.message)
    });


