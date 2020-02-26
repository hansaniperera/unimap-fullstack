"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_controller_1 = require("../controllers/course.controller");
class Course {
    constructor() {
        this.course = new course_controller_1.CourseController();
    }
    routes(app) {
        app.post('/course/new', (req, res) => {
            this.course.add_new_course(req, res);
        });
        // Update course
        app.put('/course/:id', (req, res) => {
            this.course.update_course(req, res);
        });
        app.delete('/course/:id', (req, res) => {
            this.course.delete_course(req, res);
        });
    }
}
exports.Course = Course;
//# sourceMappingURL=course.routes.js.map