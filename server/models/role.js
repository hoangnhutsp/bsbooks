import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
    name: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Role = mongoose.model('permission', roleSchema);

export default Role;