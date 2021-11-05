"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptServerlessRoute = void 0;
const adaptServerlessRoute = controller => async (event, _context, callback) => {
    console.log(event.body);
    const { statusCode, data } = await controller.handle({ body: JSON.parse(event.body) });
    callback(null, {
        status: statusCode,
        body: JSON.stringify(data)
    });
};
exports.adaptServerlessRoute = adaptServerlessRoute;
//# sourceMappingURL=serverless-router.js.map