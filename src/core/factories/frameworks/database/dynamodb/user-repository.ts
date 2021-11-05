import { UserRepository } from '@frameworks/database/dynamodb'

export const makeUserRepository = (): UserRepository => (
  new UserRepository('users')
)
