const mongoose = require('mongoose');
const { Schema } = "mongoose";

const adminSchema = new Schema({
    username: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    firstName: {
        type : String,
        required : true
    },
    lastName: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;