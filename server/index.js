import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import cors from 'cors';


// router
import productRoutes from './routes/product.js'

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

const CONNECTION_URL = 'mongodb://localhost:27017/bsbooks';
const PORT = process.env.PORT || 5000;


app.use('/product', productRoutes);

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        //

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        //
        console.log(error.message)
    });


mongoose.set('useFindAndModify', false);