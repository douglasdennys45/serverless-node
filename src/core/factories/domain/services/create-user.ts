import { makeUserRepository } from '@core/factories/frameworks/database'
import { CreateUserService, setupCreateUser } from '@services/user'

export const makeCreateUser = (): CreateUserService => (
  setupCreateUser(makeUserRepository())
)
