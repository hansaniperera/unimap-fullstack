import { Request, Response, response, Application } from 'express';

export class Result {

    public routes(app : Application) {   
                   
        app.post('/result/new', (req: Request, res: Response) => {
            
            
        });

        // Update result
        app.put('/result/:id', (req: Request, res: Response) => {
            
        });

                          
    }
}