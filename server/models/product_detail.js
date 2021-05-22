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
    id_author: Number,
    images: [
        {
            base_url: String,
            thumbnail_url: String,
            small_url: String,
            medium_url: String,
            large_url: String,
        }
    ]
});

const ProductDetail = mongoose.model('product_detail', productDetailSchema);

export default ProductDetail;
