import AWS from 'aws-sdk'

export const DynamoDBConnect = {
  client: null as any,

  connect (): void {
    this.client = new AWS.DynamoDB.DocumentClient()
  },

  run (): any {
    return this.client
  }
}
