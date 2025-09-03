import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        requireed: true,
    },
    name:{
        type: String,
        required: true,
    }
}, {timestamps: true});

userSchema.pre('save', function(next) {
    const user = this;

    const encryptedPassword = bcrypt.hashSync(user.password, 5);
    user.password = encryptedPassword;
    console.log(encryptedPassword);
    next();
});
const User = mongoose.model('User', userSchema);

export default User;