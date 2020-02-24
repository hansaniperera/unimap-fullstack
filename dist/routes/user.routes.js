"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_login_controller_1 = require("../controllers/user.login.controller");
const user_controller_1 = require("../controllers/user.controller");
const loggedUser_controller_1 = require("../controllers/loggedUser.controller");
class User {
    routes(app) {
        app.route('/login').post((req, res) => {
            new user_login_controller_1.UserLoginController().login(req, res);
        });
        app.post('/user/register', (req, res) => {
            new user_controller_1.UserController().register_user(req, res);
        });
        // Update profile
        app.put('/users/:uuid', (req, res) => {
            new loggedUser_controller_1.LoggedUserController().update_profile(req, res);
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.routes.js.map