"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    login_token: {
        type: String,
        unique: true,
        required: true
    },
    uuid: {
        type: Number,
        ref: "users",
        required: true
    },
    login_time: {
        type: Date,
        default: new Date(Date.now())
    },
    logout_time: {
        type: Date,
        default: null
    },
    valid_till: {
        type: Date,
        default: new Date(Date.now() + 3600000)
    },
    is_expired: {
        type: Boolean,
        default: false
    }
});
exports.default = mongoose.model('vehicle_login_session_logs', schema);
//# sourceMappingURL=login_session.js.map