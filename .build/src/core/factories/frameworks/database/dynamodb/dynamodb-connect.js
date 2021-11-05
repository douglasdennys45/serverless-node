"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDynamoDBConnect = void 0;
const dynamodb_1 = require("@frameworks/database/dynamodb");
const makeDynamoDBConnect = () => (dynamodb_1.DynamoDBConnect.connect());
exports.makeDynamoDBConnect = makeDynamoDBConnect;
//# sourceMappingURL=dynamodb-connect.js.map