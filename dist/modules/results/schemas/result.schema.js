"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    result_id: {
        type: String,
        unique: true,
        required: true
    },
    result: {
        type: String,
        required: true
    },
    student_id: {
        type: String,
        required: true
    },
    course_id: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});
exports.default = mongoose.model('results', schema);
//# sourceMappingURL=result.schema.js.map