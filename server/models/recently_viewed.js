import mongoose from 'mongoose';

const recentlyViewedSchema = mongoose.Schema({
    id_user: mongoose.Types.ObjectId,
    id_session: mongoose.Types.ObjectId,
    id_product: mongoose.Types.ObjectId,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const RecentlyViewed = mongoose.model('recently_viewed', recentlyViewedSchema);

export default RecentlyViewed;