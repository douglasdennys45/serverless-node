import { Controller } from '@interfaces/controllers'

type Adapter = (controller: Controller) => any

export const adaptServerlessRoute: Adapter = controller => async (event: any, _context: any, callback: any) => {
  console.log(event.body)
  const { statusCode, data } = await controller.handle({ body: JSON.parse(event.body) })
  callback(null, {
    status: statusCode,
    body: JSON.stringify(data)
  })
}
