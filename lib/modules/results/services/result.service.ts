import { IResult } from "../models/result.model";
import resultSchema from "../schemas/result.schema";

export class ResultService {

    private resultSchema = new resultSchema();

    public enter_new_result(result_params: IResult,callback : any){
        const result = resultSchema(result_params);
        result.save(callback);

    }

    public update_selected_result(result_params:any,callback:any){
        const query = {result_id:result_params.course_id}
        resultSchema.findOneAndUpdate(query,result_params,callback);
        
    }

    public getByResultId(result_id:String, callback: Function){
        const query = {result_id: result_id.toString()};
        resultSchema.findOne(query,callback);
       
    }

    public getAll(callback:any) {
        resultSchema.find({},callback);
    }
}