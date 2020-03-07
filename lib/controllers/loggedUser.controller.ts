import { userType } from "modules/common/userType";
import { Request, Response, response } from 'express';
import { UserController } from "./user.controller";
import { UserService } from "../modules/user/services/user.service";
import { IUser } from "modules/user/models/user.model";
import { LoginSessionService } from "../modules/login_session/services/login_session.service";
import { ILoginSession } from "modules/login_session/models/login_session.model";

export class LoggedUserController {

    private user = new UserService();
    private loggingSession = new LoginSessionService();

    public update_profile(req: Request, res: Response) {

        const user_params = {
            address: req.body.address,
            telephone: req.body.telephone,
            username: req.body.username,
            password: req.body.password,
            uuid: req.body.uuid
        }

        this.user.getByUuid(req.body.uuid, (err: any, user_data: IUser) => {
            if (err) {
                res.status(111).json("Error");
            } else if (user_data === null) {
                res.status(111).json("Invalid uuid");
            } else {

                this.user.updateUser(user_params, (err: any) => {
                    if (err) {
                        res.status(111).json("Couldn't update");
                    } else {
                        res.status(200).json("user updated");
                    }

                });



            }
        });

    }

    //get uuid of logged user
    public getUuid(req: Request, res: Response){
        this.user.getByUsername(req.body.username,(err:any,user_data: IUser)=>{
            if (err) {
                res.status(111).json("Error");
            } else if(user_data === null) {
                res.status(111).json("User doesn't exist");
            }else{
                if(req.body.password === user_data.password){
                    user_data.uuid;
                    console.log(user_data.uuid);
                }
            }

        });

    }

    public validate_logged_user(req: Request, res: Response, next: Function){
               this.loggingSession.getByToken(req.token,(err:any,logged_data : ILoginSession) =>{
            if (err) {
                res.status(111).json("Error");
            } else if(logged_data === null) {
                res.status(111).json("data doesn't exist");
            }else{
                next(logged_data);
                console.log(logged_data);
            }

        });
    }
}
