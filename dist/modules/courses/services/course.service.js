"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_schema_1 = require("../schemas/course.schema");
class CourseService {
    create_new_course(course_params, callback) {
        const course = new course_schema_1.default(course_params);
        course.save(callback);
    }
    update_selected_course(course_params, callback) {
        const query = { course_id: course_params.course_id };
        course_schema_1.default.findOneAndUpdate(query, course_params, callback);
    }
    getById(course_id, callback) {
        const query = { course_id: course_id.toString() };
        course_schema_1.default.findOne(query, callback);
    }
}
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map