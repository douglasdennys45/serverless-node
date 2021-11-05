"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserRepository = void 0;
const dynamodb_1 = require("@frameworks/database/dynamodb");
const makeUserRepository = () => (new dynamodb_1.UserRepository('users'));
exports.makeUserRepository = makeUserRepository;
//# sourceMappingURL=user-repository.js.map