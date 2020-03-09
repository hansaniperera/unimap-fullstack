import { Request, Response, response } from 'express';
import { ICourse } from 'modules/courses/models/course.model';
import { CourseService } from '../modules/courses/services/course.service';
import { LoggedUserController } from './loggedUser.controller';
import { IUser } from 'modules/user/models/user.model';
import { userType } from '../modules/common/userType';
import { UserService } from '../modules/user/services/user.service';
import { ILoginSession } from 'modules/login_session/models/login_session.model';

export class CourseController {

    private course_service = new CourseService();
    private logged_user = new LoggedUserController();
    private user = new UserService();

    public add_new_course(req: Request, res: Response) {

        if (req.body.course_id && req.body.course_name) {
            const course_params: ICourse = {
                course_id: req.body.course_id,
                course_name: req.body.course_name,
                lec_incharge: req.body.lec_incharge,
                year: req.body.year,
                semester: req.body.semester

            }

            this.course_service.create_new_course(course_params, (err: any) => {
                if (err) {
                    res.status(111).json("adding course denied");
                } else {

                    res.status(200).json("course added");
                }
            });


        }else {
            res.status(200).json("Insufficent inputs ");
        }

    }

    public update_course(req: Request, res: Response) {

        this.logged_user.validate_logged_user(req, res, (logged_user_data: IUser) => {
            if (logged_user_data.user_type === userType.coordinator.toString()) {

                const course_params = {
                    course_name: req.body.course_name,
                    lec_incharge: req.body.lec_incharge,
                    year: req.body.year,
                    semester: req.body.semester,
                    course_id: req.body.course_id

                }

                this.course_service.getByCourseId(req.body.course_id.toString(), (err: any, course_data: ICourse) => {
                    // console.log(course_data);
                    if (err) {
                        res.status(111).json("Error");
                    } else if (course_data === null) {
                        res.status(111).json("invalid course Id")
                    } else {
                        this.course_service.update_selected_course(course_params, (err: any) => {
                            if (err) {
                                res.status(111).json("Error");

                            } else {
                                res.status(200).json("course updated");
                            }
                        });
                    }
                });
            }
        });
    }



    public delete_course(req: Request, res: Response) {
        this.logged_user.validate_logged_user(req, res, (logged_user_data: ILoginSession) => {
            this.user.getByUuid(logged_user_data.uuid.toString(), (err: any, user_data: IUser) => {
                console.log(user_data);
                if (err) {
                    res.status(111).json("Error");
                } else if (user_data === null) {
                    res.status(111).json("Invalid uuid");
                } else {
                    const num = userType.coordinator;
                    console.log(user_data.user_type);
                    console.log(userType[num]);
                    if (user_data.user_type=== userType[num]) {
                        
                        this.course_service.getByCourseId(req.body.course_id.toString(), (err: any, course_data: ICourse) => {
                            console.log(course_data);
                            if (err) {
                                res.status(111).json("Error");
                            } else if (course_data === null) {
                                res.status(111).json("invalid course Id")
                            } else {
                                this.course_service.delete_selected_course(course_data, (err: any) => {
                                    if (err) {
                                        res.status(111).json("Error");
                                    } else {
                                        res.status(111).json({message :"deleted successfully"});
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