import { AddUserRepository } from '@domain/repositories'
import { UserEntity } from '@entities/user'

type Setup = (userRepo: AddUserRepository) => CreateUserService
type Request = { name: string, email: string, phone: string }
type Response = { errors: string[], value: string | undefined }
export type CreateUserService = (request: Request) => Promise<Response>

export const setupCreateUser: Setup = (userRepo) => async (request) => {
  const { errors, value } = UserEntity.create(request)
  if (!value && errors && errors.length > 0) {
    return { errors, value: undefined }
  }
  const response = await userRepo.insert(value)
  return { errors: [], value: response }
}
