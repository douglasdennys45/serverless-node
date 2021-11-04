export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})

export const unprocessableEntity = (data: string[]): HttpResponse => ({
  statusCode: 422,
  data
})

export const serverError = (error: any): HttpResponse<Error> => ({
  statusCode: 500,
  data: error
})
