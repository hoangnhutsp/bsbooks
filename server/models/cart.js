import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    sessionId: {
        type: mongoose.Types.ObjectId
    },
    products: [
        {
            productId: Number,
            quantity: Number,
            name: String,
            price: Number
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Cart = mongoose.model('cart', cartSchema);

export default Cart;