"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_session_schema_1 = require("../schemas/login_session.schema");
class LoginSessionService {
    loginUser(login_token, uuid, callback) {
        var login_params = {
            login_token: login_token,
            uuid: uuid
        };
        var login_session_ = new login_session_schema_1.default(login_params);
        login_session_.save(callback);
    }
    getByToken(login_token, callback) {
        var query = {
            login_token: login_token,
            is_expired: false
        };
        login_session_schema_1.default.findOne(query, callback);
    }
}
exports.LoginSessionService = LoginSessionService;
//# sourceMappingURL=login_session.service.js.map