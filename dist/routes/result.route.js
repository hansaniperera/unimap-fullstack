"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result_controller_1 = require("../controllers/result.controller");
class Result {
    constructor() {
        this.result = new result_controller_1.ResultController();
    }
    routes(app) {
        app.post('/result/new', (req, res) => {
            this.result.add_new_result(req, res);
            console.log("aaa");
        });
        // Update result
        app.put('/result/:id', (req, res) => {
            this.result.update_result(req, res);
        });
    }
}
exports.Result = Result;
//# sourceMappingURL=result.route.js.map