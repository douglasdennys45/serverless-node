import { Controller } from '@interfaces/controllers'
import { HttpResponse, unprocessableEntity, serverError, ok } from '@interfaces/helpers'
import { CreateUserService } from '@services/user'

type HttpRequest = { name: string, email: string, phone: string }

export class AddUserController implements Controller {
  constructor (private readonly services: CreateUserService) {}

  async handle (request: HttpRequest): Promise<HttpResponse<any>> {
    try {
      const { errors, value } = await this.services(request)
      if (errors && errors.length > 0) {
        return unprocessableEntity(errors)
      }
      return ok(value)
    } catch (error) {
      return serverError(error)
    }
  }
}
