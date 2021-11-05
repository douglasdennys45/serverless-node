"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCreateUser = void 0;
const database_1 = require("@core/factories/frameworks/database");
const user_1 = require("@services/user");
const makeCreateUser = () => ((0, user_1.setupCreateUser)((0, database_1.makeUserRepository)()));
exports.makeCreateUser = makeCreateUser;
//# sourceMappingURL=create-user.js.map