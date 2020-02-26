"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_service_1 = require("../modules/courses/services/course.service");
class CourseController {
    constructor() {
        this.course_service = new course_service_1.CourseService();
    }
    add_new_course(req, res) {
        if (req.body.course_id && req.body.course_name) {
            const course_params = {
                course_id: req.body.course_id,
                course_name: req.body.course_name,
                lec_incharge: req.body.lec_incharge,
                year: req.body.year,
                semester: req.body.semester
            };
            this.course_service.create_new_course(course_params, (err) => {
                if (err) {
                    res.status(111).json("adding course denied");
                }
                else {
                    res.status(200).json("course added");
                }
            });
        }
    }
    update_course(req, res) {
        const course_params = {
            course_name: req.body.course_name,
            lec_incharge: req.body.lec_incharge,
            year: req.body.year,
            semester: req.body.semester,
            course_id: req.body.course_id
        };
        this.course_service.getById(req.body.course_id.toString(), (err, course_data) => {
            // console.log(course_data);
            if (err) {
                res.status(111).json("Error");
            }
            else if (course_data === null) {
                res.status(111).json("invalid course Id");
            }
            else {
                this.course_service.update_selected_course(course_params, (err) => {
                    if (err) {
                        res.status(111).json("Error");
                    }
                    else {
                        res.status(200).json("course updated");
                    }
                });
            }
        });
    }
    delete_course(req, res) {
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map