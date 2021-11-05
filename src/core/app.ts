import './config/module-alias'
import { makeDynamoDBConnect } from '@core/factories/frameworks/database'

makeDynamoDBConnect()

export * from './config/app'
