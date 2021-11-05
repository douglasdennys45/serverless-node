"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDBConnect = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
exports.DynamoDBConnect = {
    client: null,
    connect() {
        this.client = new aws_sdk_1.default.DynamoDB.DocumentClient();
    },
    run() {
        return this.client;
    }
};
//# sourceMappingURL=dynamodb-connect.js.map