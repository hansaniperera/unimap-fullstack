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
    updateUser(user_params, callback) {
        const query = { uuid: user_params.uuid };
        user_schema_1.default.findOneAndUpdate(query, user_params, callback);
    }
    getByUuid(uuid, callback) {
        const query = { uuid: uuid.toString() };
        user_schema_1.default.findOne(query, callback);
    }
    getByUsername(username, callback) {
        const query = { username: username.toString() };
        user_schema_1.default.findOne(query, callback);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map