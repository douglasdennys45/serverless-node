import { UserRepository } from '@/domain'
import { UserEntity } from '@entities/user'

type Setup = (userRepo: UserRepository) => CreateUserUseCase
type Request = { name: string, email: string, phone: string }
type Response = { errors: string[], value: string | undefined }
export type CreateUserUseCase = (request: Request) => Promise<Response>

export const setupCreateUser: Setup = (userRepo) => async (request) => {
  const { errors, value } = UserEntity.create(request)
  if (errors && errors.length > 0) {
    return { errors, value: undefined }
  }
  const response = await userRepo.create(value)
  return { errors: [], value: response }
}
