import AWS from 'aws-sdk'

export const DynamoDBConnect = {
  client: null as any,

  connect (): void {
    const isTest = process.env.JEST_WORKER_ID
    const config = {
      convertEmptyValues: true,
      ...(isTest && {
        endpoint: 'localhost:3000',
        sslEnabled: false,
        region: 'local-env'
      })
    }
    this.client = new AWS.DynamoDB.DocumentClient(config)
  },

  run (): any {
    return this.client
  }
}
