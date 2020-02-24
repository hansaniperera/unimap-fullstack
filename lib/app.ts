import * as express from "express";
import * as bodyParser from "body-parser";
import { User } from "./routes/user.routes";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: User = new User();
    public mongoUrl: string = 'mongodb://localhost/Unimapdb';

    constructor() {
        this.app = express();
        this.config(); 
        this.routePrv.routes(this.app);
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