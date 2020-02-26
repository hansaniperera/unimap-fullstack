import { Request, Response, response } from 'express';
import { ICourse } from 'modules/courses/models/course.model';
import { CourseService } from '../modules/courses/services/course.service';

export class CourseController {

    private course_service = new CourseService();
    public add_new_course(req: Request, res: Response){
        if(req.body.course_id && req.body.course_name){
           const course_params : ICourse = {
               course_id : req.body.course_id,
               course_name : req.body.course_name,
               lec_incharge : req.body.lec_incharge,
               year : req.body.year,
               semester : req.body.semester

           }

           this.course_service.create_new_course(course_params,(err:any) => {
            if(err){
                res.status(111).json("adding course denied"); 
            }else{
               
                res.status(200).json("course added");
            }
           });


        }

    }

    public update_course(req: Request, res: Response){

        const course_params = {
            course_name : req.body.course_name,
            lec_incharge : req.body.lec_incharge,
            year : req.body.year,
            semester : req.body.semester,
            course_id: req.body.course_id

        }
                
            this.course_service.getById(req.body.course_id.toString(),(err:any,course_data:ICourse) =>{
               // console.log(course_data);
                if(err){
                    res.status(111).json("Error"); 
                }else if(course_data === null){
                    res.status(111).json("invalid course Id")
                }else{
                    this.course_service.update_selected_course(course_params,(err:any) =>{
                        if(err){
                            res.status(111).json("Error"); 
                            
                        }else{
                            res.status(200).json("course updated");
                        }
                    });
                }
            });
        

    }

    public delete_course(req: Request, res: Response){

    }
}