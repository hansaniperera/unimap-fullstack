import { IResult } from "../models/result.model";
import resultSchema from "../schemas/result.schema";

export class ResultService {

    
    public enterNewResult(result_params: IResult,callback : any){
        const result = resultSchema(result_params);
        result.save(callback);

    }

    public updateSelectedResult(result_params:any,callback:any){
        const query = {result_id:result_params.course_id}
        resultSchema.findOneAndUpdate(query,result_params,callback);
        
    }

    public getById(student_id :String, year: String,course_id:String, callback: Function){
        const query = {course_id: course_id.toString(),
                       student_id: student_id.toString(),
                       year: year.toString()
                       };
        resultSchema.findOne(query,callback);
       
    }

    public getByCourseId(course_id:String, callback: Function){
        const query = {course_id: course_id.toString()};
        resultSchema.findOne(query,callback);
       
    }

    public getByYear(year:String, callback: Function){
        const query = {year: year.toString()};
        resultSchema.findOne(query,callback);
       
    }

    public getByStudentId(student_id:String, callback: Function){
        const query = {student_id: student_id.toString()};
        resultSchema.findOne(query,callback);
       
    }

    public getAll(callback:any) {
        resultSchema.find({},callback);
    }
}