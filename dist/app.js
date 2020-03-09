"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const user_routes_1 = require("./routes/user.routes");
const mongoose = require("mongoose");
const course_routes_1 = require("./routes/course.routes");
const bearerToken = require("express-bearer-token");
const result_route_1 = require("./routes/result.route");
class App {
    constructor() {
        this.routePrv1 = new user_routes_1.User();
        this.routeCourse = new course_routes_1.Course();
        this.routeResult = new result_route_1.Result();
        this.mongoUrl = 'mongodb://localhost/Unimapdb';
        this.app = express();
        this.config();
        this.routePrv1.routes(this.app);
        this.routeCourse.routes(this.app);
        this.routeResult.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // Add authentication
        this.app.use(bearerToken());
    }
    mongoSetup() {
        // mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map