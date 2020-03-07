import { CourseController } from "../controllers/course.controller";
import { Request, Response, response, Application } from 'express';

export class Course {

    private course = new CourseController();

    public routes(app : Application) {   
                   
        app.post('/course/new', (req: Request, res: Response) => {
            this.course.add_new_course(req, res);
            
        });

        // Update course
        app.put('/course/:id', (req: Request, res: Response) => {
            this.course.update_course(req, res);
        });

        app.delete('/course/:id',(req: Request, res: Response) => {
            this.course.delete_course(req, res);
        });

                  
    }
}