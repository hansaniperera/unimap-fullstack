import {Request, Response} from "express";
import { UserLoginController } from "../controllers/user.login.controller";
import { UserController } from "../controllers/user.controller";

export class User {       
    public routes(app): void {          
        app.route('/login').post((req: Request, res: Response) => {            
            new UserLoginController().login(req, res);
    
        }) 

        app.post('/user/register', (req: Request, res: Response) => {
           new UserController().register_user(req, res);
          
        });

                  
    }

    
}