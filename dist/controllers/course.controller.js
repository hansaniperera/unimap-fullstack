"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_service_1 = require("../modules/courses/services/course.service");
const loggedUser_controller_1 = require("./loggedUser.controller");
const userType_1 = require("../modules/common/userType");
const user_service_1 = require("../modules/user/services/user.service");
class CourseController {
    constructor() {
        this.course_service = new course_service_1.CourseService();
        this.logged_user = new loggedUser_controller_1.LoggedUserController();
        this.user = new user_service_1.UserService();
    }
    add_new_course(req, res) {
        if (req.body.course_id && req.body.course_name) {
            console.log("ttttt");
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
        this.logged_user.validate_logged_user(req, res, (logged_user_data) => {
            if (logged_user_data.user_type === userType_1.userType.coordinator.toString()) {
                const course_params = {
                    course_name: req.body.course_name,
                    lec_incharge: req.body.lec_incharge,
                    year: req.body.year,
                    semester: req.body.semester,
                    course_id: req.body.course_id
                };
                this.course_service.getByCourseId(req.body.course_id.toString(), (err, course_data) => {
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
        });
    }
    delete_course(req, res) {
        this.logged_user.validate_logged_user(req, res, (logged_user_data) => {
            this.user.getByUuid(logged_user_data.uuid.toString(), (err, user_data) => {
                console.log(user_data);
                if (err) {
                    res.status(111).json("Error");
                }
                else if (user_data === null) {
                    res.status(111).json("Invalid uuid");
                }
                else {
                    const num = userType_1.userType.coordinator;
                    console.log(user_data.user_type);
                    console.log(userType_1.userType[num]);
                    if (user_data.user_type === userType_1.userType[num]) {
                        this.course_service.getByCourseId(req.body.course_id.toString(), (err, course_data) => {
                            console.log(course_data);
                            if (err) {
                                res.status(111).json("Error");
                            }
                            else if (course_data === null) {
                                res.status(111).json("invalid course Id");
                            }
                            else {
                                this.course_service.delete_selected_course(course_data, (err) => {
                                    if (err) {
                                        res.status(111).json("Error");
                                    }
                                    else {
                                        res.status(111).json({ message: "deleted successfully" });
                                    }
                                });
                            }
                        });
                    }
                }
            });
        });
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map