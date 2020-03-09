import { Request, Response, response, Application } from 'express';
import { ResultController } from '../controllers/result.controller';

export class Result {

    private result = new ResultController();

    public routes(app : Application) {  
               
        app.post('/result/new', (req: Request, res: Response) => {
        this.result.add_new_result(req,res);   
         console.log("aaa");   
        });

        // Update result
        app.put('/result/:id', (req: Request, res: Response) => {
            this.result.update_result(req,res);    
        });

                          
    }
}