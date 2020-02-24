"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_session_1 = require("../schemas/login_session");
class LoginSessionService {
    loginUser(login_token, uuid, callback) {
        var login_params = {
            login_token: login_token,
            uuid: uuid
        };
        var login_session_ = new login_session_1.default(login_params);
        login_session_.save(callback);
    }
}
exports.LoginSessionService = LoginSessionService;
//# sourceMappingURL=login_session.js.map