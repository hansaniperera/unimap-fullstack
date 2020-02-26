import users from '../schemas/user.schema';
import { IUser } from '../models/user.model';
export class UserService {

    public getAll(callback:any) {
        users.find({},callback);
    }

    public createUser(user_params: IUser, callback: any) {
        const user = new users(user_params);
        user.save(callback);
    }

    public updateUser(user_params: any, callback: any){
        const query = {uuid:user_params.uuid};
        users.findOneAndUpdate(query,user_params,callback)

    }

    public getByUuid(uuid:String, callback: Function){
        const query = {uuid:uuid.toString()};
        users.findOne(query,callback);
       
    }

    public getByUsername(username:String, callback: Function){
        const query = {username:username.toString()};
        users.findOne(query,callback);
       
    }


}