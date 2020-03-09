import * as mongoose from 'mongoose';

import { Request, Response } from 'express';

//import hash = require('sha1');
import { IUser } from 'modules/user/models/user.model';
import { UserController } from './user.controller';
import { LoginSessionService } from '../modules/login_session/services/login_session.service';




export class UserLoginController{

    private user_controller: UserController = new UserController();
    private login_session: LoginSessionService = new LoginSessionService();

public login(req: Request, res: Response) {                
    if(req.body.username && req.body.password){
        
        new UserController().view_username_for_login(req,res,(allUser: IUser[]) => {
            allUser.forEach(user => {
                if(user.username === req.body.username){
                    console.log(user.password);
                    console.log(req.body.password);
                    if(user.password === req.body.password){
                        console.log("rrr");
                        var login_token = this.user_controller.generateRandomKey();
                            new LoginSessionService().loginUser(login_token,req.body.uuid,(err: any) => {
                            if(err){
                                res.status(111).json("Login denied"); 
                            }else{
                                var login_details = {
                                    user_uuid: user.uuid,
                                    login_token: login_token
                                }
                                res.status(200).json(login_details);
                            }
                        });
                    }else{
                        res.status(111).json("Invalid password");
                    }
                }else{
                    res.status(111).json("Invalid username");
                }
            })

        });

    }else{
        res.status(111).json("Error"); 
    }
    
        
}
}