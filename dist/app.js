"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const user_routes_1 = require("./routes/user.routes");
const mongoose = require("mongoose");
const course_routes_1 = require("./routes/course.routes");
class App {
    constructor() {
        this.routePrv1 = new user_routes_1.User();
        this.route2 = new course_routes_1.Course();
        this.mongoUrl = 'mongodb://localhost/Unimapdb';
        this.app = express();
        this.config();
        this.routePrv1.routes(this.app);
        this.route2.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map