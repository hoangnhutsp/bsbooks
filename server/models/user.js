import mongoose from 'mongoose';
import fs from 'fs';
import { stringify } from 'querystring';
import jwt from 'jsonwebtoken';
import validator from 'validator';



const userSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: {
        type: String,
        unique: true,
        validate: value => {
            if(!validator.isEmail(value))
                throw new Error({error: "Invalid email credentials "})
        }
    },
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
    },
})


const User = mongoose.model('user', userSchema);

export default User;