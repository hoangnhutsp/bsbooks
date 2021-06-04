import mongoose from 'mongoose';
import fs from 'fs';
import { stringify } from 'querystring';
import jwt from 'jsonwebtoken';
import validator from 'validator';

function base64_encode(file) {
    //read binary data
    var bitmap = fs.readFileSync(file);
    //convert binary data to base64 encode string
    return bitmap.toString('base64');
}

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: String,
    email: {
        type: String,
        unique: true,
        require: true,
        validate: value => {
            if(!validator.isEmail(value))
                throw new Error({error: "Invalid email credentials "})
        }
    },
    password: {
        type: String,
        require: true
    },
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
    },
    token: []
})


const User = mongoose.model('users', userSchema);

export default User;