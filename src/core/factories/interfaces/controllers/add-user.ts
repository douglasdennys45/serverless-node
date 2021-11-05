import { makeCreateUser } from '@core/factories/domain/services'
import { AddUserController, Controller } from '@interfaces/controllers'
import { makeDynamoTransactionController } from '../decorators'

export const makeAddUserController = (): Controller => {
  const controller = new AddUserController(makeCreateUser())
  return makeDynamoTransactionController(controller)
}
