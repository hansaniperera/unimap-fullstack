import {Request, Response} from "express";
import { UserLoginController } from "../controllers/user.login.controller";
import { UserController } from "../controllers/user.controller";
import { LoggedUserController } from "../controllers/loggedUser.controller";

export class User {       
    public routes(app): void {          
        app.route('/login').post((req: Request, res: Response) => {            
            new UserLoginController().login(req, res);
    
        }) 

        app.post('/user/register', (req: Request, res: Response) => {
           new UserController().register_user(req, res);
          
        });

        // Update profile
        app.put('/users/:uuid', (req: Request, res: Response) => {
            new LoggedUserController().update_profile(req, res);
        });

                  
    }

    
}