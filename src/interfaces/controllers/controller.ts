import { HttpResponse, HttpRequest } from '@interfaces/helpers'

export interface Controller {
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
