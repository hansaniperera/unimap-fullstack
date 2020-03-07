import { UserService } from "../modules/user/services/user.service";
import { IUser } from "modules/user/models/user.model";
import { Request, Response, response } from 'express';
import { userType } from "modules/common/userType";

export class UserController {

    private user_service: UserService = new UserService();

    public view_username_for_login(req: Request, res: Response, next: Function) {
        this.user_service.getAll((err: any, data: IUser[]) => {
            if (err) {
                res.status(111).json(err);
            } else {
                next(data);
            }
        });
    }

    public register_user(req: Request, res: Response) {
        
        if (req.body.firstname &&
            req.body.middlename &&
            req.body.lastname &&
            req.body.username &&
            req.body.password &&
            req.body.usertype) {
                
                const user_params : IUser ={
                    firstname: req.body.firstname,
                    middlename: req.body.middlename,
                    lastname: req.body.lastname,
                    address: req.body.address,
                    telephone: req.body.telephone,
                    user_type: req.body.usertype,
                    username: req.body.username,
                    password: req.body.password,
                    uuid: req.body.uuid
                }
                console.log("www");

                this.user_service.createUser(user_params,(err: any)=> {
                    console.log(user_params);
                    if(err){
                        res.status(111).json("register denied"); 
                    }else{
                       
                        res.status(200).json("user registered");
                    }
                });
            }
        }

            
        
    

    public generateRandomKey(): string {
        return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 15 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(15);
        });
    }
}