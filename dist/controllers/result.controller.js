"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_service_1 = require("../modules/results/services/result.service");
const loggedUser_controller_1 = require("./loggedUser.controller");
class ResultController {
    constructor() {
        this.result_service = new result_service_1.ResultService();
        this.logged_user = new loggedUser_controller_1.LoggedUserController();
        // res.status(200).json("Access denied");
        //}
        //});
        //}
    }
    add_new_result(req, res) {
        //console.log("fff")
        if (req.body.result_id && req.body.student_id && req.body.course_id) {
            //console.log("ggg");
            const result_params = {
                course_id: req.body.course_id,
                result_id: req.body.result_id,
                student_id: req.body.student_id,
                year: req.body.year,
                result: req.body.result
            };
            this.result_service.enterNewResult(result_params, (err) => {
                if (err) {
                    res.status(111).json("adding result denied");
                }
                else {
                    res.status(200).json("result added");
                }
            });
        }
        else {
            res.status(200).json("Insufficent inputs ");
        }
    }
    update_result(req, res) {
        //this.logged_user.validate_logged_user(req, res, (logged_user_data: IUser) => {
        // if (logged_user_data.user_type === userType.lecturer.toString()) {
        if (req.body.student_id.toString() && req.body.year.toString() &&
            req.body.course_id.toString()) {
            const result_params = {
                course_id: req.body.course_id,
                result_id: req.body.result_id,
                student_id: req.body.student_id,
                year: req.body.year,
                result: req.body.result
            };
            this.result_service.getById(req.body.student_id.toString(), req.body.year.toString(), req.body.course_id.toString(), (err, course_data) => {
                // console.log(course_data);
                if (err) {
                    res.status(111).json("Error");
                }
                else if (course_data === null) {
                    res.status(111).json("invalid result Id");
                }
                else {
                    this.result_service.updateSelectedResult(result_params, (err) => {
                        if (err) {
                            res.status(111).json("Error");
                        }
                        else {
                            res.status(200).json("result updated");
                        }
                    });
                }
            });
        }
        else {
            res.status(200).json("Insufficent inputs");
        }
    } //else {
}
exports.ResultController = ResultController;
//# sourceMappingURL=result.controller.js.map