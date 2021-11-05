"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
class UserEntity {
    constructor(userParam) {
        this.userParam = userParam;
    }
    static create(userParam) {
        const user = new UserEntity(userParam);
        const errors = user.isCreated();
        if (errors && errors.length > 0) {
            return { errors, value: undefined };
        }
        return { errors: [], value: user.userParam };
    }
    isCreated() {
        const errors = [];
        if (!this.userParam.name) {
            errors.push('Por favor informe o nome');
        }
        if (!this.userParam.email) {
            errors.push('Por favor informe o email');
        }
        if (!this.userParam.phone) {
            errors.push('Por favor informe o telefone');
        }
        return errors;
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.js.map