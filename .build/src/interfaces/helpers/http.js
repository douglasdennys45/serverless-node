"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.unprocessableEntity = exports.ok = void 0;
const ok = (data) => ({
    statusCode: 200,
    data
});
exports.ok = ok;
const unprocessableEntity = (data) => ({
    statusCode: 422,
    data
});
exports.unprocessableEntity = unprocessableEntity;
const serverError = (error) => ({
    statusCode: 500,
    data: error
});
exports.serverError = serverError;
//# sourceMappingURL=http.js.map