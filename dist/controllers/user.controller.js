"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../modules/user/services/user.service");
class UserController {
    constructor() {
        this.user_service = new user_service_1.UserService();
    }
    view_username_for_login(req, res, next) {
        this.user_service.getAll((err, data) => {
            if (err) {
                res.status(111).json(err);
            }
            else {
                next(data);
            }
        });
    }
    register_user(req, res) {
        if (req.body.firstname &&
            req.body.middlename &&
            req.body.lastname &&
            req.body.username &&
            req.body.password &&
            req.body.usertype) {
            console.log("ww");
            const user_params = {
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname,
                address: req.body.address,
                telephone: req.body.telephone,
                user_type: req.body.usertype,
                username: req.body.username,
                password: req.body.password,
                uuid: req.body.uuid
            };
            this.user_service.createUser(user_params, (err) => {
                if (err) {
                    res.status(111).json("register denied");
                }
                else {
                    res.status(200).json("user registered");
                }
            });
        }
    }
    generateRandomKey() {
        return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 15 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(15);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map