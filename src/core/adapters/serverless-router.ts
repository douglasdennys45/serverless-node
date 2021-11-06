import { Controller } from '@interfaces/controllers'

type Adapter = (controller: Controller) => any

export const adaptServerlessRoute: Adapter = controller => async (event, _context, callback) => {
  const { statusCode, data } = await controller.handle({ body: JSON.parse(event.body) })
  callback(null, {
    statusCode,
    body: JSON.stringify({
      status: statusCode,
      body: data
    })
  })
}
