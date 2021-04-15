import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    _id: Number,
    id_category: Number,
    sku: String,
    name: String,
    url_key: String,
    short_description: String,
    price: Number,
    discount: Number,
    discount_rate: Number,
    rating_average: Number,
    review_count: Number,
    thumbnail_url: String,
    has_ebook: Boolean,
    invetory_status: String,
    publisher: String,
    author_name: String,

});

const Product = mongoose.model('Product', productSchema);

export default Product;
