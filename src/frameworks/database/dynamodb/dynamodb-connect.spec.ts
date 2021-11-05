import { DynamoDBConnect } from './dynamodb-connect'

describe('DynamoDB Connect', () => {
  const sut = DynamoDBConnect

  it('deve connectar no dynamodb', async () => {
    await sut.connect()
    expect(sut.client).toBeTruthy()
    const client = sut.run()
    expect(client).toBeTruthy()
  })
})
