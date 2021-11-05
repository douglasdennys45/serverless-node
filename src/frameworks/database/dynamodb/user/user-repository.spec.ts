import { DynamoDBConnect } from '@frameworks/database/dynamodb'
import { UserRepository } from '.'

describe('ProviderDynamoRepository', () => {
  let sut: UserRepository
  let data: { name: string, email: string, phone: string }

  beforeAll(async () => {
    DynamoDBConnect.connect()
  })

  beforeEach(() => {
    data = { name: 'DEV IOUU', email: 'dev@iouu.com.br', phone: '84999009900' }
  })

  describe('add()', () => {
    test('Should return an user on success', async () => {
      const id = await sut.insert(data)
      expect(id).toBeTruthy()
    })
  })
})
