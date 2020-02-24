"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_login_controller_1 = require("../controllers/user.login.controller");
const user_controller_1 = require("../controllers/user.controller");
class User {
    routes(app) {
        app.route('/login').post((req, res) => {
            new user_login_controller_1.UserLoginController().login(req, res);
        });
        app.post('/user/register', (req, res) => {
            new user_controller_1.UserController().register_user(req, res);
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.routes.js.map