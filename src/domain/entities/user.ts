import { UserParam, UserReturn } from './types'

export class UserEntity {
  constructor (private readonly userParam: UserParam) {}

  static create (userParam: UserParam): UserReturn {
    const user = new UserEntity(userParam)
    const errors = user.isCreated()
    if (errors && errors.length > 0) {
      return { errors, value: undefined }
    }
    return { errors: [], value: user.userParam }
  }

  private isCreated (): string[] {
    const errors: string[] = []
    if (!this.userParam.name) {
      errors.push('Por favor informe o nome')
    }
    if (!this.userParam.email) {
      errors.push('Por favor informe o email')
    }
    if (!this.userParam.phone) {
      errors.push('Por favor informe o telefone')
    }

    return errors
  }
}
