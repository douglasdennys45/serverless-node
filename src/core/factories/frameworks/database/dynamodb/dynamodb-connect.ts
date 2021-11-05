import { DynamoDBConnect } from '@frameworks/database/dynamodb'

export const makeDynamoDBConnect = (): any => (
  DynamoDBConnect.connect()
)
