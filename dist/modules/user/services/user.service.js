"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schemas/user.schema");
class UserService {
    getAll(callback) {
        user_schema_1.default.find({}, callback);
    }
    createUser(user_params, callback) {
        const user = new user_schema_1.default(user_params);
        user.save(callback);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map