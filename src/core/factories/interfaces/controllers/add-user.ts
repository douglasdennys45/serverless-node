import { makeCreateUser } from '@core/factories/domain/services'
import { AddUserController, Controller } from '@interfaces/controllers'

export const makeAddUserController = (): Controller => (
  new AddUserController(makeCreateUser())
)
