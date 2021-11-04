import { AddUserController } from '@interfaces/controllers'

describe('AddUserController', () => {
  let sut: AddUserController
  let services: jest.Mock
  let data: { body: { name: string, email: string, phone: string } }

  beforeAll(() => {
    data = { body: { name: 'Dev IOUU', email: 'dev@iouu.com.br', phone: '84999990000' } }
    services = jest.fn()
    services.mockResolvedValue({ errors: [], value: 'any_response' })
  })

  beforeEach(() => {
    sut = new AddUserController(services)
  })

  it('should call Create User Service with correct input', async () => {
    await sut.handle(data)
    expect(services).toHaveBeenCalledWith(data.body)
    expect(services).toHaveBeenCalledTimes(1)
  })

  it('should return 500 on infra error', async () => {
    const error = new Error('infra_error')
    services.mockRejectedValueOnce(error)
    const httpResponse = await sut.handle(data)
    expect(httpResponse).toEqual({
      statusCode: 500,
      data: error
    })
  })

  it('should return 200 if create user succeeds', async () => {
    const httpResponse = await sut.handle(data)
    expect(httpResponse).toEqual({
      statusCode: 200,
      data: 'any_response'
    })
  })

  it('should return 422 if create user fails', async () => {
    services.mockResolvedValue({ errors: ['error'], value: undefined })
    const httpResponse = await sut.handle(data)
    expect(httpResponse.data.length).toEqual(1)
    expect(httpResponse.statusCode).toEqual(422)
  })
})
