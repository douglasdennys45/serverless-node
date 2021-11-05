"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const helpers_1 = require("@interfaces/helpers");
class Controller {
    async handle(httpRequest) {
        try {
            return await this.perform(httpRequest);
        }
        catch (error) {
            return (0, helpers_1.serverError)(error);
        }
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map