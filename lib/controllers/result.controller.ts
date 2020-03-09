import { Request, Response, response } from 'express';
import { Course } from 'routes/course.routes';
import { IResult } from 'modules/results/models/result.model';
import { ResultService } from '../modules/results/services/result.service';
import { LoginSessionService } from 'modules/login_session/services/login_session.service';
import { LoggedUserController } from './loggedUser.controller';
import { IUser } from '../modules/user/models/user.model';
import { userType } from '../modules/common/userType';

export class ResultController {

    private result_service = new ResultService();
    private logged_user = new LoggedUserController();

   
    public add_new_result(req: Request, res: Response) {
        //console.log("fff")
        if (req.body.result_id && req.body.student_id && req.body.course_id) {
            //console.log("ggg");
            const result_params: IResult = {
                course_id: req.body.course_id,
                result_id: req.body.result_id,
                student_id: req.body.student_id,
                year: req.body.year,
                result: req.body.result

            }

            this.result_service.enterNewResult(result_params, (err: any) => {
                if (err) {
                    res.status(111).json("adding result denied");
                } else {

                    res.status(200).json("result added");
                }
            });

        
    }else {
        res.status(200).json("Insufficent inputs ");
    }
}

    public update_result(req: Request, res: Response) {
        //this.logged_user.validate_logged_user(req, res, (logged_user_data: IUser) => {
           // if (logged_user_data.user_type === userType.lecturer.toString()) {
                if(req.body.student_id.toString() && req.body.year.toString() &&
                req.body.course_id.toString()){
                const result_params: IResult = {
                      course_id: req.body.course_id,
                      result_id: req.body.result_id,
                      student_id: req.body.student_id,
                      year: req.body.year,
                      result: req.body.result
    
                }

                this.result_service.getById(req.body.student_id.toString(),req.body.year.toString(),
                req.body.course_id.toString(), (err: any, course_data: IResult) => {
                    // console.log(course_data);
                    if (err) {
                        res.status(111).json("Error");
                    } else if (course_data === null) {
                        res.status(111).json("invalid result Id")
                    } else {
                        this.result_service.updateSelectedResult(result_params, (err: any) => {
                            if (err) {
                                res.status(111).json("Error");

                            } else {
                                res.status(200).json("result updated");
                            }
                        });
                    }
                });
            }else {
                res.status(200).json("Insufficent inputs");
            }

        } //else {
           // res.status(200).json("Access denied");
        //}
    //});

        
    //}
}