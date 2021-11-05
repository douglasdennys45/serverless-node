"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
var adapters_1 = require("@core/adapters");
var controllers_1 = require("@core/factories/interfaces/controllers");
exports.createUser = (0, adapters_1.adaptServerlessRoute)((0, controllers_1.makeAddUserController)());
//# sourceMappingURL=user.js.map