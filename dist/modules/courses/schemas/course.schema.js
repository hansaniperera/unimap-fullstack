"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    course_id: {
        type: String,
        unique: true,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    lec_incharge: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: 'Enter course year'
    },
    semester: {
        type: String,
        required: true
    }
});
exports.default = mongoose.model('courses', schema);
//# sourceMappingURL=course.schema.js.map