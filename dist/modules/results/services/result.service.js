"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_schema_1 = require("../schemas/result.schema");
class ResultService {
    enterNewResult(result_params, callback) {
        const result = result_schema_1.default(result_params);
        result.save(callback);
    }
    updateSelectedResult(result_params, callback) {
        const query = { result_id: result_params.course_id };
        result_schema_1.default.findOneAndUpdate(query, result_params, callback);
    }
    getById(student_id, year, course_id, callback) {
        const query = { course_id: course_id.toString(),
            student_id: student_id.toString(),
            year: year.toString()
        };
        result_schema_1.default.findOne(query, callback);
    }
    getByCourseId(course_id, callback) {
        const query = { course_id: course_id.toString() };
        result_schema_1.default.findOne(query, callback);
    }
    getByYear(year, callback) {
        const query = { year: year.toString() };
        result_schema_1.default.findOne(query, callback);
    }
    getByStudentId(student_id, callback) {
        const query = { student_id: student_id.toString() };
        result_schema_1.default.findOne(query, callback);
    }
    getAll(callback) {
        result_schema_1.default.find({}, callback);
    }
}
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map