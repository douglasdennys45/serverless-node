"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const uuid = __importStar(require("uuid"));
const dynamodb_1 = require("@frameworks/database/dynamodb");
class UserRepository {
    constructor(tableName) {
        this.tableName = tableName;
    }
    async insert(request) {
        const conn = dynamodb_1.DynamoDBConnect.run();
        const params = {
            TableName: this.tableName,
            Item: {
                ...request,
                id: uuid.v4(),
                created_at: new Date(),
                updated_at: new Date(),
                deleted_at: null
            }
        };
        await conn.put(params).promise();
        return params.Item.id;
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map