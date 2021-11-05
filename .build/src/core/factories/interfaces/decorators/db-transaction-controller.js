"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDynamoTransactionController = void 0;
const database_1 = require("@core/factories/frameworks/database");
const decorators_1 = require("@interfaces/decorators");
const makeDynamoTransactionController = (controller) => {
    return new decorators_1.DbTransactionController(controller, (0, database_1.makeDynamoDBConnect)());
};
exports.makeDynamoTransactionController = makeDynamoTransactionController;
//# sourceMappingURL=db-transaction-controller.js.map