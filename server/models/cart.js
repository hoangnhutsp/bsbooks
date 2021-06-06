import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId
    },
    items: [
        {
            productId: Number,
            quantity: Number,
            name: String,
            price: Number,
            checked: Boolean,
            image: String,
        }   
    ],
    status : {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Cart = mongoose.model('cart', cartSchema);

export default Cart;