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

    public getByCourseId(course_id:String, callback: Function){
        const query = {course_id: course_id.toString()};
        courseSchema.findOne(query,callback);
       
    }

    public delete_selected_course(course_params:ICourse,callback:any){
        const query = {course_id:course_params.course_id}
        courseSchema.deleteOne(query,callback);

    }

    public getAll(callback:any) {
        courseSchema.find({},callback);
    }
}