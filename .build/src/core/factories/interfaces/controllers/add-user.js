"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddUserController = void 0;
const services_1 = require("@core/factories/domain/services");
const controllers_1 = require("@interfaces/controllers");
const decorators_1 = require("../decorators");
const makeAddUserController = () => {
    const controller = new controllers_1.AddUserController((0, services_1.makeCreateUser)());
    return (0, decorators_1.makeDynamoTransactionController)(controller);
};
exports.makeAddUserController = makeAddUserController;
//# sourceMappingURL=add-user.js.map