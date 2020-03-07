"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../modules/user/services/user.service");
const login_session_service_1 = require("../modules/login_session/services/login_session.service");
class LoggedUserController {
    constructor() {
        this.user = new user_service_1.UserService();
        this.loggingSession = new login_session_service_1.LoginSessionService();
    }
    update_profile(req, res) {
        const user_params = {
            address: req.body.address,
            telephone: req.body.telephone,
            username: req.body.username,
            password: req.body.password,
            uuid: req.body.uuid
        };
        this.user.getByUuid(req.body.uuid, (err, user_data) => {
            if (err) {
                res.status(111).json("Error");
            }
            else if (user_data === null) {
                res.status(111).json("Invalid uuid");
            }
            else {
                this.user.updateUser(user_params, (err) => {
                    if (err) {
                        res.status(111).json("Couldn't update");
                    }
                    else {
                        res.status(200).json("user updated");
                    }
                });
            }
        });
    }
    //get uuid of logged user
    getUuid(req, res) {
        this.user.getByUsername(req.body.username, (err, user_data) => {
            if (err) {
                res.status(111).json("Error");
            }
            else if (user_data === null) {
                res.status(111).json("User doesn't exist");
            }
            else {
                if (req.body.password === user_data.password) {
                    user_data.uuid;
                    console.log(user_data.uuid);
                }
            }
        });
    }
    validate_logged_user(req, res, next) {
        this.loggingSession.getByToken(req.token, (err, logged_data) => {
            if (err) {
                res.status(111).json("Error");
            }
            else if (logged_data === null) {
                res.status(111).json("data doesn't exist");
            }
            else {
                next(logged_data);
                console.log(logged_data);
            }
        });
    }
}
exports.LoggedUserController = LoggedUserController;
//# sourceMappingURL=loggedUser.controller.js.map