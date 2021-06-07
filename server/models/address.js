import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
    id_user: {
        type: mongoose.Types.ObjectId,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    is_defaul: {
        type: Number,
        default: 0
    }

})

const Address = mongoose.model('address', addressSchema);
export default Address;