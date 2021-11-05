import * as uuid from 'uuid'
import { AddUserRepository } from '@domain/repositories'
import { DynamoDBConnect } from '@frameworks/database/dynamodb'

export class UserRepository implements AddUserRepository {
  constructor (private readonly tableName: string) {}

  async insert (request: AddUserRepository.Request): Promise<string> {
    const conn = DynamoDBConnect.run()
    const params = {
      TableName: this.tableName,
      Item: {
        ...request,
        id: uuid.v4(),
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      }
    }
    await conn.put(params).promise()
    return params.Item.id
  }
}
