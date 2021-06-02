import mongoose from 'mongoose';
import fs from 'fs';
import { stringify } from 'querystring';

function base64_encode(file) {
    //read binary data
    var bitmap = fs.readFileSync(file);
    //convert binary data to base64 encode string
    return bitmap.toString('base64');
}

const userSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    address: String,
    gender: String,
    birthday: Date,
    avatar: {
        type: String,
        default: "http://localhost:5000/default/images/default-avatar-profile.jpg",
    },
    role: {
        type: String,
        default: "USER",
    }
})

const User = mongoose.model('users', userSchema);

export default User;