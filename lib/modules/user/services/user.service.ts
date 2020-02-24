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


}