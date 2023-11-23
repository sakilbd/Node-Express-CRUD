import { Schema, model } from "mongoose";
import { TUser } from "./users/user.interface";

import bycrypt from 'bcrypt';
import config from "../config";



const userSchema = new Schema<TUser>({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: [{ type: String }],
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    orders: [{
        productName: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
    }],
});


userSchema.pre("save", async function (next) {
    const user = this;
    user.password = await bycrypt.hash(user.password, Number(config.bcrypt_salt_rounds))

    next();
})
userSchema.post("save", function (doc, next) {
    //actions after post data save ;
    next();
})


userSchema.methods.toJSON = function () {
    const userObject = this.toObject();
    delete userObject.password; // Remove password from the JSON object
    return userObject;
};




export const UserModel = model<TUser>("User", userSchema);