import { makeDynamoDBConnect } from '@core/factories/frameworks/database'
import { Controller } from '@interfaces/controllers'
import { DbTransactionController } from '@interfaces/decorators'

export const makeDynamoTransactionController = (controller: Controller): DbTransactionController => {
  return new DbTransactionController(controller, makeDynamoDBConnect())
}
