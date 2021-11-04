import { Controller } from '@interfaces/controllers'
import { HttpResponse } from '@interfaces/helpers'

class ControllerStub extends Controller {
  result: HttpResponse = {
    statusCode: 200,
    data: 'any_data'
  }

  async perform (httpRequest: any): Promise<HttpResponse> {
    return this.result
  }
}

describe('Controller', () => {
  let sut: ControllerStub

  beforeEach(() => {
    sut = new ControllerStub()
  })

  it('should return 500 if perform throws', async () => {
    const error = new Error('perform_error')
    jest.spyOn(sut, 'perform').mockRejectedValueOnce(error)
    const httpResponse = await sut.handle('any_value')
    expect(httpResponse).toEqual({
      statusCode: 500,
      data: error
    })
  })

  it('should return same result as perform', async () => {
    const httpResponse = await sut.handle('any_value')
    expect(httpResponse).toEqual(sut.result)
  })
})
