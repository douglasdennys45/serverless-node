import { mock, MockProxy } from 'jest-mock-extended'

import { AddUserRepository } from '@domain/repositories'
import { CreateUserService, setupCreateUser } from '.'

describe('Create User - Service', () => {
  let userRepo: MockProxy<AddUserRepository>
  let sut: CreateUserService
  let data: { name: string, email: string, phone: string }

  beforeAll(() => {
    data = { name: 'Dev IOUU', email: 'dev@iouu.com.br', phone: '84999990000' }
    userRepo = mock()
    userRepo.insert.mockResolvedValue('any_response')
  })

  beforeEach(() => {
    sut = setupCreateUser(userRepo)
  })

  it('Deve passar os parametros correto', async () => {
    await sut(data)
    expect(userRepo.insert).toHaveBeenCalledWith(data)
    expect(userRepo.insert).toHaveBeenCalledTimes(1)
  })

  it('Deve retorna o erro de validação', async () => {
    const { errors } = await sut({ name: '', email: '', phone: '' })
    expect(errors.length).toEqual(3)
  })

  it('Deve retorna um exceção', async () => {
    userRepo.insert.mockRejectedValueOnce(new Error('error'))
    const promise = sut(data)
    await expect(promise).rejects.toThrow(new Error('error'))
  })
})
