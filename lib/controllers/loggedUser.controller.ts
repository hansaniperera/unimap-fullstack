import { userType } from "modules/common/userType";
import { Request, Response, response } from 'express';
import { UserController } from "./user.controller";
import { UserService } from "../modules/user/services/user.service";
import { IUser } from "modules/user/models/user.model";

export class LoggedUserController {

    private user = new UserService();

    public update_profile(req: Request, res: Response){
        
            const user_params ={
            address: req.body.address,
            telephone: req.body.telephone,
            username: req.body.username,
            password: req.body.password,
            uuid: req.body.uuid            
        }

        this.user.getByUuid(req.body.uuid,(err:any,user_data : IUser)=>{
            console.log(user_data);
            if(err){
                res.status(111).json("Error"); 
            }else if(user_data === null){
                res.status(111).json("Invalid uuid"); 
            }else{
                
                this.user.updateUser(user_params,(err:any)=>{
                    if(err){
                        res.status(111).json("Couldn't update"); 
                    }else{
                        res.status(200).json("user updated");
                    }
           
        });

        

        }
    });
        
       }
    }
