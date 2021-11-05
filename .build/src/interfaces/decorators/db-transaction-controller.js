"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbTransactionController = void 0;
const controllers_1 = require("@interfaces/controllers");
class DbTransactionController extends controllers_1.Controller {
    constructor(decoratee, db) {
        super();
        this.decoratee = decoratee;
        this.db = db;
    }
    async perform(httpRequest) {
        await this.db.openTransaction();
        try {
            const httpResponse = await this.decoratee.perform(httpRequest);
            await this.db.commit();
            return httpResponse;
        }
        catch (error) {
            await this.db.rollback();
            throw error;
        }
        finally {
            await this.db.closeTransaction();
        }
    }
}
exports.DbTransactionController = DbTransactionController;
//# sourceMappingURL=db-transaction-controller.js.map