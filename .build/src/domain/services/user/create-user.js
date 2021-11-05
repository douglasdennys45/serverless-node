"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCreateUser = void 0;
const user_1 = require("@entities/user");
const setupCreateUser = (userRepo) => async (request) => {
    const { errors, value } = user_1.UserEntity.create(request);
    if (!value && errors && errors.length > 0) {
        return { errors, value: undefined };
    }
    const response = await userRepo.insert(value);
    return { errors: [], value: response };
};
exports.setupCreateUser = setupCreateUser;
//# sourceMappingURL=create-user.js.map