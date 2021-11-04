import { Controller } from '@interfaces/controllers'
import { HttpResponse, HttpRequest, unprocessableEntity, serverError, ok } from '@interfaces/helpers'
import { CreateUserService } from '@services/user'

export class AddUserController implements Controller {
  constructor (private readonly services: CreateUserService) {}

  async handle (request: HttpRequest): Promise<HttpResponse<any>> {
    try {
      const { errors, value } = await this.services(request.body)
      if (errors && errors.length > 0) {
        return unprocessableEntity(errors)
      }
      return ok(value)
    } catch (error) {
      return serverError(error)
    }
  }
}
