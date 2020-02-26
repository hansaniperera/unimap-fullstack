import { ICourse } from "../models/course.model";
import courseSchema from "../schemas/course.schema";

export class CourseService {

    public create_new_course(course_params : ICourse,callback : any){
        const course = new courseSchema(course_params);
        course.save(callback);

    }

    public update_selected_course(course_params:any,callback:any){
        const query = {course_id:course_params.course_id}
        courseSchema.findOneAndUpdate(query,course_params,callback);
        
    }

    public getById(course_id:String,callback:any){
        const query = {course_id:course_id.toString()}
        courseSchema.findOne(query,callback);
        
    }
}