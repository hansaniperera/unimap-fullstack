"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const login_session_service_1 = require("../modules/login_session/services/login_session.service");
class UserLoginController {
    constructor() {
        this.user_controller = new user_controller_1.UserController();
        this.login_session = new login_session_service_1.LoginSessionService();
    }
    login(req, res) {
        if (req.body.username && req.body.password) {
            new user_controller_1.UserController().view_username_for_login(req, res, (allUser) => {
                allUser.forEach(user => {
                    if (user.username === req.body.username) {
                        console.log(user.password);
                        console.log(req.body.password);
                        if (user.password === req.body.password) {
                            console.log("rrr");
                            var login_token = this.user_controller.generateRandomKey();
                            new login_session_service_1.LoginSessionService().loginUser(login_token, req.body.uuid, (err) => {
                                if (err) {
                                    res.status(111).json("Login denied");
                                }
                                else {
                                    var login_details = {
                                        user_uuid: user.uuid,
                                        login_token: login_token
                                    };
                                    res.status(200).json(login_details);
                                }
                            });
                        }
                        else {
                            res.status(111).json("Invalid password");
                        }
                    }
                    else {
                        res.status(111).json("Invalid username");
                    }
                });
            });
        }
        else {
            res.status(111).json("Error");
        }
    }
}
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=user.login.controller.js.map