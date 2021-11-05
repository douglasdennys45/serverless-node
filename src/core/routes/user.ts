import { adaptServerlessRoute } from '@core/adapters'
import { makeAddUserController } from '@core/factories/interfaces/controllers'

export const createUser = adaptServerlessRoute(makeAddUserController())
