import mongoose from 'mongoose';

const productDetailSchema = mongoose.Schema({
    id: Number,
    description: String,
    specifications: [
        {
            name: String,
            attributes: [
               { 
                    name: String,
                    value: String,
                }
            ],
        }
    ],
    images: [String]
});

const ProductDetail = mongoose.model('product_detail', productDetailSchema);

export default ProductDetail;
