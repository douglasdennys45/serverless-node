import faker from 'faker'

import { UserEntity } from './user'
import { UserParam } from './types'

describe('User Entity', () => {
  let userParam: UserParam

  beforeEach(() => {
    userParam = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber()
    }
  })

  it('Deve testar o sucesso da criação', () => {
    const { value, errors } = UserEntity.create(userParam)
    expect(value).toEqual(userParam)
    expect(errors.length).toEqual(0)
  })

  it('Deve testar o erro de validação', () => {
    const { value, errors } = UserEntity.create({ name: '', email: '', phone: '' })
    expect(value).toBeFalsy()
    expect(errors.length).toEqual(3)
  })
})
