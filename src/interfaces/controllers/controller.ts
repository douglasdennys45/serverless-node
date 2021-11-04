import { HttpResponse } from '@interfaces/helpers'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
