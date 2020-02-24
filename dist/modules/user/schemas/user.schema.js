"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  This schema is used for creating a user in fum-database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    uuid: {
        type: String,
        unique: true,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: 'Enter first name'
    },
    middlename: {
        type: String,
        required: 'Enter middle name'
    },
    lastname: {
        type: String,
        required: 'Enter last name'
    },
    address: {
        type: String
    },
    telephone: {
        type: Number
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.default = mongoose.model('users', schema);
//# sourceMappingURL=user.schema.js.map