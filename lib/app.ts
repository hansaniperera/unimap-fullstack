import * as express from "express";
import * as bodyParser from "body-parser";
import { User } from "./routes/user.routes";
import * as mongoose from "mongoose";
import { Course } from "./routes/course.routes";

class App {

    public app: express.Application;
    public routePrv1: User = new User();
    public route2: Course = new Course();
    public mongoUrl: string = 'mongodb://localhost/Unimapdb';

    constructor() {
        this.app = express();
        this.config(); 
        this.routePrv1.routes(this.app);
        this.route2.routes(this.app);
        this.mongoSetup();      
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

}

export default new App().app;