"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserController = void 0;
const controllers_1 = require("@interfaces/controllers");
const helpers_1 = require("@interfaces/helpers");
class AddUserController extends controllers_1.Controller {
    constructor(services) {
        super();
        this.services = services;
    }
    async perform(request) {
        try {
            const { errors, value } = await this.services(request.body);
            if (errors && errors.length > 0) {
                return (0, helpers_1.unprocessableEntity)(errors);
            }
            return (0, helpers_1.ok)(value);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.AddUserController = AddUserController;
//# sourceMappingURL=add-user.js.map